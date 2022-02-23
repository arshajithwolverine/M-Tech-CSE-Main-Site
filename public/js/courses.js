function courses() {
    console.log('Courses');
    document.getElementById('header').style.background = 'cadetblue';
    let html = `
    <main id="main">

    <!-- ======= Our Services Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>Courses</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>Courses</li>
          </ol>
        </div>

      </div>
    </section><!-- End Our Services Section -->

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
          <p class="description">Masters in Artificial Intelligence. AI is one of the leading research areas</p>
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
    </section>
    `;
    document.getElementById('main-content').innerHTML = html;
}