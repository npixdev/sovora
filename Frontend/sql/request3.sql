ALTER TABLE image MODIFY image_url TEXT;

INSERT INTO image (product_id, image_url, is_main) 
VALUES (
    1,
    'https://spcpfqxkurcadntccghe.supabase.co/storage/v1/object/sign/images/royaloak.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOGIwZjI3MS0wYTBiLTRhZTctOTY4ZS1mMmY2ZDAwZmEwNTYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJpbWFnZXMvcm95YWxvYWsucG5nIiwiaWF0IjoxNzY2MzMyNDI3LCJleHAiOjMzMjcwNzk2NDI3fQ.Q47ml0-57u1huv4Xx4qLLIwqwTJBdbXltDbshPnmFX4',
    TRUE
);