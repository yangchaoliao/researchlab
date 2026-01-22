// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-home",
    title: "Home",
    section: "Navigation",
    handler: () => {
      window.location.href = "/researchlab/";
    },
  },{id: "nav-the-team",
          title: "The Team",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/researchlab/People/";
          },
        },{id: "nav-research",
          title: "Research",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/researchlab/research/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/researchlab/publications/";
          },
        },{id: "nav-news",
          title: "News",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/researchlab/news/";
          },
        },{id: "dropdown-all-publications",
              title: "All Publications",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/researchlab/all_publications/";
              },
            },{id: "dropdown-student-awards",
              title: "Student Awards",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/researchlab/student_awards/";
              },
            },{id: "dropdown-photo-gallery",
              title: "Photo Gallery",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/researchlab/photo_gallery/";
              },
            },{id: "dropdown-group-alumni",
              title: "Group Alumni",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/researchlab/group_alumni/";
              },
            },{id: "dropdown-teaching",
              title: "Teaching",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/researchlab/teaching/";
              },
            },{id: "news-dr-liao-has-joined-the-school-of-civil-and-environmental-engineering-at-changsha-university-of-science-and-technology-csust-as-a-lecturer-the-new-research-group-website-is-now-officially-online-sparkles-smile",
          title: 'Dr. Liao has joined the School of Civil and Environmental Engineering at Changsha...',
          description: "",
          section: "News",},{id: "news-dr-liao-was-invited-to-deliver-a-general-education-lecture-titled-mechanics-unlocking-the-future-meta-major-to-the-class-of-2025-undergraduates-in-the-department-of-engineering-mechanics-at-csust-link-1-link-2-link-3",
          title: 'Dr. Liao was invited to deliver a general education lecture titled “Mechanics: Unlocking...',
          description: "",
          section: "News",},{id: "news-dr-liao-participated-in-the-32nd-teaching-seminar-and-young-faculty-teaching-competition-organized-by-the-department-of-mechanics",
          title: 'Dr. Liao participated in the 32nd Teaching Seminar and Young Faculty Teaching Competition...',
          description: "",
          section: "News",},{id: "projects-topic-1-crumpling-behavior-of-2d-sheets",
          title: 'Topic 1 - Crumpling behavior of 2D sheets',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/researchlab/projects/1_project/";
            },},{id: "projects-topic-2-compression-mechanics-of-crumpled-balls",
          title: 'Topic 2 - Compression mechanics of crumpled balls',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/researchlab/projects/2_project/";
            },},{id: "projects-topic-3-modeling-of-microcrystalline-glass",
          title: 'Topic 3 - Modeling of microcrystalline glass',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/researchlab/projects/3_project/";
            },},{id: "projects-topic-4-molecular-dynamics-of-assembled-carbon-materials",
          title: 'Topic 4 - Molecular dynamics of assembled carbon materials',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/researchlab/projects/4_project/";
            },},{id: "projects-topic-5-micro-nano-interlocks",
          title: 'Topic 5 - Micro/nano interlocks',
          description: "",
          section: "Projects",handler: () => {
              window.location.href = "/researchlab/projects/5_project/";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
