from __future__ import annotations

import shutil
import sys
from datetime import datetime
from pathlib import Path

from PIL import Image, ImageOps


def backup_if_exists(path: Path, backup_dir: Path) -> None:
    """Move existing file to backup_dir, avoiding overwrite."""
    if not path.exists():
        return
    backup_dir.mkdir(exist_ok=True)
    target = backup_dir / path.name
    if target.exists():
        timestamp = datetime.now().strftime("%Y%m%d-%H%M%S")
        target = backup_dir / f"{path.stem}-{timestamp}{path.suffix}"
    shutil.move(str(path), target)


def generate_icons() -> None:
    base_dir = Path(__file__).resolve().parent
    src = base_dir / "111.jpg"
    if not src.exists():
        raise FileNotFoundError(f"源文件不存在: {src}")

    backup_dir = base_dir / "temp"

    targets = [
        ("apple-touch-icon.png", (180, 180), "PNG"),
        ("favicon-32x32.png", (32, 32), "PNG"),
        ("favicon-16x16.png", (16, 16), "PNG"),
        ("android-chrome-192x192.png", (192, 192), "PNG"),
        ("android-chrome-512x512.png", (512, 512), "PNG"),
        ("favicon.ico", [(16, 16), (32, 32), (48, 48), (64, 64)], "ICO"),
    ]

    img = Image.open(src).convert("RGBA")

    for filename, size, fmt in targets:
        output_path = base_dir / filename
        backup_if_exists(output_path, backup_dir)

        if filename == "favicon.ico" and isinstance(size, list):
            resized = [ImageOps.fit(img, s, method=Image.Resampling.LANCZOS) for s in size]
            resized[0].save(output_path, format=fmt, sizes=size)
        else:
            resized = ImageOps.fit(img, size, method=Image.Resampling.LANCZOS)
            resized.save(output_path, format=fmt)

    print("图标已生成，并备份旧文件至", backup_dir)


if __name__ == "__main__":
    try:
        generate_icons()
    except Exception as exc:  # pragma: no cover - simple runtime guard
        print("生成失败:", exc)
        sys.exit(1)

