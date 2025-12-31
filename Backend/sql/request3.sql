ALTER TABLE image MODIFY image_url TEXT;

INSERT INTO image (product_id, image_url, is_main) 
VALUES (
    1,
    '/images/royaloak/1.png',
    TRUE
);