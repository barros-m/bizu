import React, { useEffect } from 'react';
import './Typeform.css'

const Typeform = () => {


  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//embed.typeform.com/next/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Clean up the script to avoid loading it multiple times or memory leaks
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="typeform-component">
        <div data-tf-live="01HDHQG6H3E6Y77H66WMJPW8FB"></div><script src="//embed.typeform.com/next/embed.js"></script>
    </section>

  );
}

export default Typeform;
