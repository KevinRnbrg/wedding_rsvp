import { Box } from "@mui/material";
import "../styles/ComponentStyles.css";

function Place() {
  return (
    <Box className="component-box">
      <Box className="light-box">
        <p className="font-default">
          Pulmad toimuvad Kernu mõisas, mis asub Tallinn-Pärnu maanteel, kuhu
          peaks olema mugav sõita nii neil, kes saabuvad Tallinnast kui ka neil,
          kes tulevad Hiiumaalt.
        </p>
        <p className="font-default">
          Mõisas on ööbimisruumi meile kõigile ning mõnus väike spaa.
        </p>
      </Box>
      <iframe
        className="google-map"
        title="googleMaps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2045.541509641041!2d24.492136000000002!3d59.156798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692b7da94e20b1b%3A0x65350b90f1b9fe07!2sKernu%20manor!5e0!3m2!1sen!2see!4v1677562650237!5m2!1sen!2see"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </Box>
  );
}

export default Place;
