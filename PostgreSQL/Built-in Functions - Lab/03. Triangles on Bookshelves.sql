SELECT id,
       (t.side * t.height) / 2 AS area
FROM triangles as t;
