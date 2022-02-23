function about() {
    console.log('About');
    document.getElementById('header').style.background = 'cadetblue';
    let html = `
    <main id="main">

    <!-- ======= About Us Section ======= -->
    <section class="breadcrumbs">
      <div class="container">

        <div class="d-flex justify-content-between align-items-center">
          <h2>About Us</h2>
          <ol>
            <li><a href="index.html">Home</a></li>
            <li>About Us</li>
          </ol>
        </div>

      </div>
    </section><!-- End About Us Section -->

    <!-- ======= About Section ======= -->
    <section class="about" data-aos="fade-up">
      <div class="container">

        <div class="row">
          <div class="col-lg-6">
            <img src="assets/img/cet.jpeg" class="img-fluid" alt="">
          </div>
          <div class="col-lg-6 pt-4 pt-lg-0">
            <h3>College of Engineering, Trivandum</h3>
            <p class="fst-italic">
            The College of Engineering, Trivandrum was established in 1939 as the first Engineering College in the then Travancore State. The first classes were started on 3rd  July 1939 during the reign of the Travancore King, Sri Chithira Thirunal Balarama Varma and as the head of the then Travancore state he deserves his share of credit in the establishment of the college. Initially the College was housed in the former office and bungalow of the Chief Engineer (present PMG Office). Maj T.H. Mathewman, a Britisher was the first Principal. Started as a constituent College of Travancore University, the College had an initial intake of 21 students each for Degree and Diploma courses in Civil, Mechanical and Electrical branches. With the establishment of the Directorate of Technical Education in the late fifties, the College administration came under the control of the Government of Kerala. The College was shifted to the present sprawling 125 acres in 1960.
            </p>
            Vision
            <ul>
              <li><i class="bi bi-check2-circle"></i> National Level Excellence and International Visibility in Every facet of Engineering Education.</li>
            </ul>
            Mission
            <ul>
              <li><i class="bi bi-check2-circle"></i> To facilitate quality transformative education in Engineering and Management.</li>
              <li><i class="bi bi-check2-circle"></i> To foster innovations in Technology and its application for meeting global challenges.</li>
              <li><i class="bi bi-check2-circle"></i> To pursue and disseminate Quality Research.</li>
              <li><i class="bi bi-check2-circle"></i> To equip, enrich and transform students to be Responsible Professionals for better service to humanity.</li>
            </ul>
            <p>
            Over the years, the intake of students increased and as of now with eight full-fledged departments offering eight undergraduate, 27 postgraduate and doctoral programmes under the APJ Abdul Kalam Technological University, the College has around 4500 students, 311 teaching staff and 290 non-teaching staff. B.Tech, B.Arch, M.Tech, M.Plan, MCA and MBA  are also offered by the College.
            </p>
            <p>
            Ever since the inception, the College has maintained its eminence as a leading Engineering College in India. According to NIRF ranking College of Engineering Trivandrum is placed in the 71st position.. The College ranks among the top in the country in the quality of its graduates and the number of top jobs held by its graduates. With such an eminence in the academic and curricular activities, the College is the most sought after Engineering College by the applicants of Engineering degree programmes in the state.
            </p>
          </div>
        </div>

      </div>
    </section><!-- End About Section -->
    `;
    document.getElementById('main-content').innerHTML = html;
}