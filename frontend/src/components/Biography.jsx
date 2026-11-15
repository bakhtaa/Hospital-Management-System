import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
<h3>Who We Are</h3>
<p>
  Welcome to ZeeCare, a trusted healthcare institution committed to providing 
  exceptional medical care to our patients and their families. Founded with a 
  mission to deliver compassionate, high-quality health services, we combine 
  cutting-edge technology with a patient-centered approach to ensure the best 
  possible outcomes.
</p>
<p>Our Services</p>
<p>
  ZeeCare offers a comprehensive range of medical specialties to meet all 
  your healthcare needs under one roof:
</p>
<p>
   <strong>Cardiology</strong> — Advanced diagnosis and treatment of heart 
  conditions, including electrocardiography, echocardiography, and cardiac 
  monitoring by experienced cardiologists.
</p>
<p>
  <strong>Neurology</strong> — Expert care for disorders of the brain, 
  spinal cord, and nervous system, with state-of-the-art diagnostic tools 
  and specialized neurologists.
</p>
<p>
   <strong>Pediatrics</strong> — Dedicated medical care for infants, 
  children, and adolescents, ensuring their health and development in a 
  safe and friendly environment.
</p>
<p>
   <strong>Orthopedics</strong> — Comprehensive treatment of bone, joint, 
  and muscle disorders, from sports injuries to complex fractures and 
  joint replacement surgeries.
</p>
<p>
   <strong>Oncology</strong> — Compassionate cancer care including early 
  detection, chemotherapy, and personalized treatment plans developed by 
  our multidisciplinary oncology team.
</p>
<p>
   <strong>Radiology</strong> — High-precision medical imaging services 
  including X-ray, MRI, CT scan, and ultrasound for accurate diagnosis 
  and treatment planning.
</p>
<p>
  <strong>Physical Therapy</strong> — Personalized rehabilitation programs 
  to help patients recover mobility, strength, and independence following 
  injury, surgery, or chronic conditions.
</p>
<p>
  <strong>Dermatology</strong> — Diagnosis and treatment of skin, hair, 
  and nail conditions, from common skin diseases to advanced cosmetic 
  and surgical dermatology.
</p>
<p>
  👂 <strong>ENT (Ear, Nose & Throat)</strong> — Specialized care for 
  disorders of the ear, nose, throat, and related structures of the head 
  and neck, for both adults and children.
</p>
<p>
  At ZeeCare, your health is our priority. Our team of skilled doctors, 
  nurses, and healthcare professionals work around the clock to provide 
  you with safe, effective, and compassionate care. Book your appointment 
  today and take the first step toward better health.
</p>
        </div>
      </div>
    </>
  );
};

export default Biography;