from pathlib import Path
from PIL import Image

root = Path(r"C:\Users\anton\Documents\Codex\2026-07-19\va")
source = root / "work" / "client-logos"
target = root / "public" / "clients"
target.mkdir(parents=True, exist_ok=True)

def trim(image, padding=18):
    bbox = image.getbbox()
    if not bbox:
        return image
    left, top, right, bottom = bbox
    return image.crop((max(0, left - padding), max(0, top - padding), min(image.width, right + padding), min(image.height, bottom + padding)))

def white_to_alpha(filename, output):
    image = Image.open(source / filename).convert("RGBA")
    pixels = image.load()
    for y in range(image.height):
        for x in range(image.width):
            r, g, b, a = pixels[x, y]
            if r > 246 and g > 246 and b > 246:
                pixels[x, y] = (r, g, b, 0)
    trim(image).save(target / output, optimize=True)

white_to_alpha("benvenuti-1.png", "benvenuti-al-sud.png")
white_to_alpha("lanterna-1.png", "la-lanterna.png")
trim(Image.open(source / "denis-cars-clean.png").convert("RGBA"), 22).save(target / "denis-cars.png", optimize=True)

denis = trim(Image.open(source / "denis-cars-clean.png").convert("RGBA"), 22)
pixels = denis.load()
for y in range(denis.height):
    for x in range(denis.width):
        r, g, b, a = pixels[x, y]
        if a and r > 210 and g > 210 and b > 210:
            pixels[x, y] = (11, 31, 51, a)
denis.save(target / "denis-cars-hover.png", optimize=True)
