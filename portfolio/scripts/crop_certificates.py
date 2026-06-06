import os
from PIL import Image, ImageChops

def trim(im):
    # Convert to grayscale to find the brightness
    grayscale = im.convert('L')
    
    # The certificate is the brightest part of the image (usually >200)
    # The Drive/Browser UI is usually darker or has different colors.
    # We use a threshold to create a binary mask of the white paper.
    mask = grayscale.point(lambda p: 255 if p > 180 else 0)
    mask = mask.convert('1')
    
    # Find the bounding box of the white area
    bbox = mask.getbbox()
    
    if bbox:
        # Add a tiny 2px padding to avoid cutting into the certificate border
        padded_bbox = (
            max(0, bbox[0] - 2),
            max(0, bbox[1] - 2),
            min(im.size[0], bbox[2] + 2),
            min(im.size[1], bbox[3] + 2)
        )
        return im.crop(padded_bbox)
    
    return im

def process_certificates():
    cert_dir = 'public/certificates'
    if not os.path.exists(cert_dir):
        print(f"Directory {cert_dir} not found.")
        return

    for filename in os.listdir(cert_dir):
        if filename.endswith(('.png', '.jpg', '.jpeg')):
            path = os.path.join(cert_dir, filename)
            print(f"Processing {filename}...")
            try:
                with Image.open(path) as im:
                    im = im.convert('RGB')
                    cropped_im = trim(im)
                    # Handle cases where the crop resulted in the same image
                    if cropped_im.size == im.size:
                        print(f"No significant cropping needed for {filename}")
                    else:
                        cropped_im.save(path, quality=95)
                        print(f"Successfully cropped and saved {filename}")
            except Exception as e:
                print(f"Error processing {filename}: {e}")

if __name__ == "__main__":
    process_certificates()
