ALTER TABLE product MODIFY description VARCHAR(1000);
ALTER TABLE product MODIFY category_id BIGINT NULL;

INSERT INTO product (name, description, price, stock, brand, gender, movement)
VALUES (
    'Seiko Royal Oak',
    'La Seiko Royal Oak allie élégance et performance. Son boîtier en acier inoxydable brossé et poli, associé à un bracelet intégré, offre un design raffiné et intemporel. Dotée d’un mouvement automatique précis, cette montre vous assure fiabilité et confort au quotidien. Le cadran texturé avec index luminescents et aiguilles argentées facilite la lecture de l’heure dans toutes les conditions. Parfaite pour les amateurs de montres raffinées, elle se porte aussi bien au bureau qu’en soirée.',
    209.99,
    1,
    'Seiko',
    'man',
    'automatic'
);