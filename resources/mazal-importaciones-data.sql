-- PRODUCTOS JARDINERIA
-- INSERT INTO `product`(`product_id`,`product_code`, `product_name`, `product_unit`, `product_measures`, `product_image`, `product_observations`) VALUES 
-- (null,"JARADM", "Adaptador macho", "Bolsa por 50 unidades", '1/2"', null,null),
-- (null,"JARC", "Conector reforzado", "Bolsa por 50 unidades", '1/2" - 3/4"',null,null),
-- (null,"JARMA", "Manga canilla rosca", "Bolsa por 50 unidades", '3/4" - 1"', null,null),
-- (null,"JARUM", "Unión manguera reforzada", "Bolsa por 50 unidades", '1/2" - 3/4"',null,null),
-- (null,"JAREMA", "Enrrollador manguera ", "Unidad", null, null,null),
-- (null,"JAREMAR", "Enrollador manguera con ruedas", "Unidad",null,null,null),
-- (null,"JARJM", "Rociador jabalina metálica", "Unidad", null,null,null),
-- (null,"JARJMC", "Rociador jabalina metálica cabezal solo", "Unidad",null, null,null),
-- (null,"JARJMP", "Rociador jabalina metálica pinche solo", "Unidad", null,null,null),
-- (null,"JARJP", "Rociador jabalina plástica", "Unidad", null,null,null),
-- (null,"JARJPC", "Rociador jabalina plástica cabezal solo", "Unidad", null,null,null),
-- (null,"JARJPP", "Rociador jabalina plástica piche solo", "Unidad", null, null,null),
-- (null,"JARLR", "Lanza reforzada alto impacto", "Unidad", null, null,null),
-- (null,"JARPI6", "Pistola regulador 6 posiciones reforzada", "Unidad",null, null,null),
-- (null,"JARPI6E", "Pistola regulador 6 posiciones económica", "Unidad", null,null,null),
-- (null,"JARPIER", "Pistola reforzada ergonométrica", "Unidad", null,null,null),
-- (null,"JARPIME", "Pistola metálica alto impacto", "Unidad",null,null,null),
-- (null,"JARPIPL", "Pistola plástica alto impacto", "Unidad", null,null,null),
-- (null,"JARPIPLR", "Pistola plástica reforzada", "Unidad", null,null,null),
-- (null,"JARROB2", "Rociador base redonda riego en 2 direcciones", "Unidad",null, null,null),
-- (null,"JARROB3", "Rociador base redonda riego en 3 direcciones", "Unidad", null,null,null),
-- (null,"JARROB8", "Rociador base redonda dial de 8 posiciones", "Unidad", null,null,null),
-- (null,"JARROLL", "Rociador lluvia con válvula", "Unidad", '1/2" - 3/4"',null,null);

-- -- PRODUCTOS CADENAS
-- INSERT INTO `product`(`product_id`,`product_code`, `product_name`, `product_unit`, `product_measures`, `product_image`, `product_observations`) VALUES
-- (null,"CADBA","Cadena banderola", "Madeja por 25 metros", "Simple - Doble",null,null),
-- (null,"CADBN","Cadena bolita bronce niquel", "Madeja por 15 metros", null,null,null),
-- (null,"CADBP","Cadena bolita bronce pulido", "Madeja por 15 metros", null,null,null),
-- (null,"CADBTN","Terminal bolita bronce niquel", "Bolsa por 100 unidades", null,null,null),
-- (null,"CADBTP","Terminal bolita bronce pulido", "Bolsa por 100 unidades", null,null,null),
-- (null,"CADBUN","Unión bolita bronce niquel", "Bolsa por 100 unidades", null,null,null),
-- (null,"CADBUP","Unión bolita bronce pulido", "Bolsa por 100 unidades", null,null,null),
-- (null,"CADN","Cadena nudo galvanizada", "Carretel por 25 metros", "N° 13 - N° 15 - N° 17 - N° 18",null,null),
-- (null,"CADPP","Cadena paseo perro", "Docena", "2 mm - 2,5 mm - 3 mm - 3,5 mm - 4 mm",null,"Largo: 1,25 m"),
-- (null,"CADZ","Cadena patente zincada", "Balde por 12,5 kg", "N° 30 - N° 35 - N° 40 - N° 45 - N° 50 - N° 55 - N° 60 - N° 70 - N° 80 - N° 90 - N° 100 - N° 110",null,null);


INSERT INTO subcategory(subcategory_name,category_id) VALUES
('ANTEOJOS',1), ('ARCOS DE SIERRA',1),('ADHESIVOS',1),('CADENAS',1),
('CINTAS',1),('CUTTER',1),('GUANTES',1),('VARIOS',1),('PERCHAS',1),

('BISAGRAS',2),('CANDADOS',2),('CERRADURAS',2),('CORREDERAS Y PISTONES',2),
('GANCHOS',2),('MANIJAS',2),('MOSQUETONES',2),('PASADORES',2),
('RETENES',2),('RUEDAS',2),('SOPORTES',2),

('MEDIDAS',3),('ACCESIRIOS DE ALBAÑILERÍA',3),('DISCOS',3),
('NIVELADORES',3),('NIVELES',3),('PINCELES',3),('PLOMADAS',3),

('CANILLAS',4),('TEFLÓN',4),

('TORNILLOS',5),('PITONES',5),

('ACCESORIOS DE RIEGO',6),('CARRETEL',6),('LONAS',6),('PULVERIZADORES',6),

('MOSQUITERO',7),('CERRAMIENTO',7),('SEÑALIZACIÓN',7);

insert into product (product_code,product_name,product_description,product_measures,product_unit,
product_min_cant,product_cant_bulto,product_image,product_observations) 
values ('ANTPRO','Anteojos de protección','Hechos en policarbonato. Color negro y transparente',
'','unidad',)