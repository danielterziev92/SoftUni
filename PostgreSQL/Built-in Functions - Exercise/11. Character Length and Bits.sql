SELECT "Mountain Information",
       length("Mountain Information")     as "Characters Length",
       bit_length("Mountain Information") as "Bits of a String"
FROM (SELECT concat_ws(' ', m.mountain_range, p.peak_name) as "Mountain Information"
      FROM mountains as m
               JOIN peaks as p ON m.id = p.mountain_id) as q;