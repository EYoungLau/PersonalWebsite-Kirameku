import uuid
from io import BytesIO

from fastapi import APIRouter, UploadFile, File, HTTPException, Depends
from PIL import Image

from app.deps import get_current_user
from app.config import BASE_DIR

router = APIRouter(prefix="/api/upload", tags=["上传"])

# 文件扩展名由验证后的图片格式决定，不信任客户端提供的文件名或 MIME 类型。
IMAGE_EXTENSIONS = {"JPEG": "jpg", "PNG": "png", "WEBP": "webp", "GIF": "gif"}
MAX_SIZE = 10 * 1024 * 1024  # 10MB


@router.post("/image")
async def upload_image(
    file: UploadFile = File(...),
    _: dict = Depends(get_current_user),
):
    if file.content_type not in {"image/jpeg", "image/png", "image/webp", "image/gif"}:
        raise HTTPException(400, f"不支持的文件类型: {file.content_type}")

    content = await file.read(MAX_SIZE + 1)
    if len(content) > MAX_SIZE:
        raise HTTPException(400, "文件大小不能超过 10MB")

    try:
        with Image.open(BytesIO(content)) as img:
            ext = IMAGE_EXTENSIONS.get(img.format)
            if not ext:
                raise HTTPException(400, "不支持的图片格式")
            w, h = img.size
            img.verify()
    except (OSError, ValueError, Image.DecompressionBombError) as exc:
        raise HTTPException(400, "图片内容无效") from exc

    orientation = "landscape" if w >= h else "portrait"
    filename = f"{uuid.uuid4().hex}.{ext}"
    try:
        (BASE_DIR / "uploads").mkdir(parents=True, exist_ok=True)
        with (BASE_DIR / "uploads" / filename).open("xb") as output:
            output.write(content)
    except OSError as exc:
        raise HTTPException(500, "服务器无法保存图片") from exc

    return {"url": f"/uploads/{filename}", "orientation": orientation}
