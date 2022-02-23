function homepage() {
    console.log('Homepage entered');
    document.getElementById('header').style.background = 'none';
    let html = `
    <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex justify-cntent-center align-items-center">
    <div id="heroCarousel" class="container carousel carousel-fade" data-bs-ride="carousel" data-bs-interval="5000">

      <!-- Slide 1 -->
      <div class="carousel-item active">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Artificial Intelligence</h2>
          <p class="animate__animated animate__fadeInUp">Masters in Artificial Intelligence. AI is one of the leading research areas</p>
          <a href="#" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>

      <!-- Slide 2 -->
      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Information Security</h2>
          <p class="animate__animated animate__fadeInUp">Masters in Information Security. IS seeks to provide security within system and networks</p>
          <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>

      <!-- Slide 3 -->
      <div class="carousel-item">
        <div class="carousel-container">
          <h2 class="animate__animated animate__fadeInDown">Computer Science and Engineering</h2>
          <p class="animate__animated animate__fadeInUp">Masters in Computer Science and Engineering. CSE provides core of computer science</p>
          <a href="" class="btn-get-started animate__animated animate__fadeInUp">Read More</a>
        </div>
      </div>

      <a class="carousel-control-prev" href="#heroCarousel" role="button" data-bs-slide="prev">
        <span class="carousel-control-prev-icon bx bx-chevron-left" aria-hidden="true"></span>
      </a>

      <a class="carousel-control-next" href="#heroCarousel" role="button" data-bs-slide="next">
        <span class="carousel-control-next-icon bx bx-chevron-right" aria-hidden="true"></span>
      </a>

    </div>
  </section><!-- End Hero -->

  <main id="main">

    <!-- ======= Services Section ======= -->
    <section class="services">
      <div class="container">

      <div class="row">
          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up">
            <div class="icon-box icon-box-pink">
              <div class="icon"><i class="bx bxl-dribbble"></i></div>
              <h4 class="title"><a href="">M Tech CSE</a></h4>
              <p class="description">College of Engineering Trivandrum Provides 3 Masters Courses under CS Department</p>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div class="icon-box icon-box-cyan">
              <div class="icon"><i class="bx bx-file"></i></div>
              <h4 class="title"><a href="">Artificial Intelligence</a></h4>
              <p class="description">Masters in Artificial Intelligence. AI is one of the leading research areas.</p>
              <a href="https://cse.cet.ac.in/wp-content/uploads/2021/01/MTech-AI-Syllabus-2020.pdf">Syllabus</a>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-green">
              <div class="icon"><i class="bx bx-tachometer"></i></div>
              <h4 class="title"><a href="">Information Security</a></h4>
              <p class="description">Masters in Information Security. IS seeks to provide security within system and networks</p>
              <a href="">Syllabus</a>
            </div>
          </div>

          <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <div class="icon-box icon-box-blue">
              <div class="icon"><i class="bx bx-world"></i></div>
              <h4 class="title"><a href="">Computer Science and Engineering</a></h4>
              <p class="description">Masters in Computer Science and Engineering. CSE provides core of computer science</p>
              <a href="">Syllabus</a>
            </div>
          </div>

        </div>

      </div>
    </section><!-- End Services Section -->

    <!-- ======= Why Us Section ======= -->
    <section class="why-us section-bg" data-aos="fade-up" date-aos-delay="200">
      <div class="container">

        <div class="row">
          <div class="col-lg-6 video-box">
            <img src="assets/img/cet.jpeg" class="img-fluid" alt="">
            <a href="https://youtu.be/eDrktVh7BUc" class="venobox play-btn mb-4" data-vbtype="video" data-autoplay="true"></a>
          </div>

          <div class="col-lg-6 d-flex flex-column justify-content-center p-5">

            <div class="icon-box">
              <div class="icon"><i class="bx bx-fingerprint"></i></div>
              <h4 class="title"><a href="">Vision</a></h4>
              <p class="description">National Level Excellence and International Visibility in Every Facet of Engineering Research and Education.</p>
            </div>

            <div class="icon-box">
              <div class="icon"><i class="bx bx-gift"></i></div>
              <h4 class="title"><a href="">Mission</a></h4>
              <ul class="description">
              <li><i class="bi bi-check2-circle"></i> To facilitate quality transformative education in Engineering and Management.</li>
              <li><i class="bi bi-check2-circle"></i> To foster innovations in Technology and its application for meeting global challenges.</li>
              <li><i class="bi bi-check2-circle"></i> To pursue and disseminate Quality Research.</li>
              <li><i class="bi bi-check2-circle"></i> To equip, enrich and transform students to be Responsible Professionals for better service to humanity.</li>
            </ul>
            </div>

          </div>
        </div>

      </div>
    </section>

  </main><!-- End #main -->
    `;

    document.getElementById('main-content').innerHTML = html;
}