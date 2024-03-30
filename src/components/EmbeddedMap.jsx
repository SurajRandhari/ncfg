import React from 'react';

const EmbeddedMap = () => {
  return (
    <div>
      <iframe
        title="Embedded Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3870.114782058856!2dYOUR_LONGITUDE!3dYOUR_LATITUDE!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3AYOUR_LOCATION_NAME!2sYOUR_LOCATION_NAME!5e0!3m2!1sen!2sus!4v1617818806988!5m2!1sen!2sus"
        width="600"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default EmbeddedMap;
