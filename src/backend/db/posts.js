import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: "15e5bc45-f341-4287-97f3-d9a1f845ff69",
    content: "It's my Birthday today!",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686386278/socialMedia/cake_g0csez.jpg",
    mediaAlt: "A piece of cake",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "t7cZfWIp-q",
          firstName: "Emily",
          lastName: "Smith",
          username: "emilysmith",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
        },
        {
          _id: "79Gksh9otl",
          firstName: "Sarah",
          lastName: "Wilson",
          username: "wilsarah",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Jacob",
          lastName: "Mitchell",
          username: "jacobmitch",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "livparker",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "t1cZfWIp-q",
        commentData: "Wish you a very Happy Birthday, dear!",
        firstName: "Emily",
        lastName: "Smith",
        username: "emilysmith",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "q18zWjEeXd",
        commentData: "Happy Birthday, girl!",
        firstName: "Olivia",
        lastName: "Parker",
        username: "livparker",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "116Be1QpLm",
        commentData: "Happy Birthday! Be always happy!",
        firstName: "Jacob",
        lastName: "Mitchell",
        username: "jacobmitch",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "508f7462-a891-4d73-987e-ad030fa40fcd",
    content:
      "Just had my mind blown at the A.R. Rahman concert! 🎶🤩 An absolute musical genius, his melodies transported me to another world. The energy, the soul-stirring compositions, and the electrifying atmosphere... it was an unforgettable experience! 🎵✨",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/video/upload/w_400,f_auto,q_auto/v1686375304/socialMedia/concert-video_nlsijt.mp4",
    mediaAlt: "Concert Video",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "adityaj",
    createdAt: "2023-03-15T01:06:00+05:30",
    updatedAt: "2023-03-15T01:06:00+05:30",
    comments: [
      {
        _id: "o52gzWjEeX_",
        commentData:
          "It was lot of fun! Next time will go with all our friends!",
        firstName: "Rohan",
        lastName: "Roy",
        username: "rohaaan",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        createdAt: "2023-03-16T01:06:00+05:30",
        updatedAt: "2023-03-16T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "175ece04-a8b3-4cf5-a9f1-4de2c84c8b7c",
    content:
      "Nowadays, spending lots of time with coding! Building something gives so much pleasure!✨🚀",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687930216/socialMedia/coding_kz1ars.jpg",
    mediaAlt: "Laptop Image",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "emilysmith",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "qq83zWjEeXd",
        commentData: "Awesome!",
        firstName: "Olivia",
        lastName: "Parker",
        username: "livparker",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "1N5R81Bzmuh",
        commentData: "Keep learning and keep growing!",
        firstName: "Aryan",
        lastName: "Patel",
        username: "aryan987",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "eaf91a20-5b28-a6b2-bae97d76681a",
    content:
      "We can’t get over yestaerday's football match and neither can our captain! 💙",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "1T6Be1QpLm",
          firstName: "Jacob",
          lastName: "Mitchell",
          username: "jacobmitch",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "adityaj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "1T6Be1QpLmaszx",
        commentData: "India! India!!!",
        firstName: "Jacob",
        lastName: "Mitchell",
        username: "jacobmitch",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "o5gzWjEeX_9876",
        commentData: "What an incredible match it was!",
        firstName: "Rohan",
        lastName: "Roy",
        username: "rohaaan",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "39475b82-0f43-40f1-a98f-a145c52c02db",
    content:
      "Stepping into the fashion scene like a style supernova! From runway inspirations to street chic, I'm here to make heads turn and trends ignite.",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687930615/socialMedia/fashio-show-men_pnsrnz.jpg",
    mediaAlt: "Fashion Show Image",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Sarah",
          lastName: "Wilson",
          username: "wilsarah",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "jamesmurf",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "79tyGksh9otl",
        commentData: "Wish you all the best! Keep shining!",
        firstName: "Sarah",
        lastName: "Wilson",
        username: "wilsarah",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "203e6407-4fa8-47dc-8406-7ae2530c1461",
    content:
      "Exciting news! Embarking on a new storytelling adventure as I dive into the realms of imagination to craft my upcoming book. Words are my enchanting brushstrokes, painting vivid worlds and compelling characters.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Sarah",
          lastName: "Wilson",
          username: "wilsarah",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "imkriti",
    createdAt: "2021-09-15T01:06:00+05:30",
    updatedAt: "2021-09-15T01:06:00+05:30",
    comments: [
      {
        _id: "1NR81Bzmuh12",
        commentData: "Amazing! Looking forward to your new work!",
        firstName: "Aryan",
        lastName: "Patel",
        username: "aryan987",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        createdAt: "2021-09-15T01:06:00+05:30",
        updatedAt: "2021-09-15T01:06:00+05:30",
      },
      {
        _id: "o5gzWjEeX_sdcf",
        commentData: "Ohh Wow! Eager to read.",
        firstName: "Rohan",
        lastName: "Roy",
        username: "rohaaan",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        createdAt: "2021-09-16T01:06:00+05:30",
        updatedAt: "2021-09-16T01:06:00+05:30",
      },
      {
        _id: "LCrc9f0Zl0asd",
        commentData:
          "Great! Always liked your books. This time also it will be a good read.",
        firstName: "Aditya",
        lastName: "Joshi",
        username: "adityaj",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        createdAt: "2021-09-18T01:06:00+05:30",
        updatedAt: "2021-09-18T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "ede18080-78ab-4c3e-a3e2-aded11c1bf95",
    content:
      "Just had the most incredible experience at the Met Gala! ✨🌟 The fashion extravaganza was an artistic playground, where imagination and couture collided. Rubbing shoulders with fashion icons and witnessing breathtaking creations was a dream come true. Feeling inspired and ready to push the boundaries of style in my own designs! 🌹💃 ",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687930816/socialMedia/met-gala_sbtw5a.webp",
    mediaAlt: "Met-Gala-Fashion-show",
    likes: {
      likeCount: 6,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Sarah",
          lastName: "Wilson",
          username: "wilsarah",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "avaturn",
    createdAt: "2021-03-11T01:06:00+05:30",
    updatedAt: "2021-03-11T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz2345",
        commentData:
          "It must be an amazing experience! Let's catch up soon! Eager to hear your experience there!",
        firstName: "Kriti",
        lastName: "Desai",
        username: "imkriti",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        createdAt: "2021-03-12T01:06:00+05:30",
        updatedAt: "2021-03-12T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "7f6e1427-c26d-4969-928f-ca966129a87a",
    content:
      "Dream big, hustle harder! Success is not a destination; it's a journey of resilience, determination, and unwavering belief in your vision.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aryan987",
    createdAt: "2022-05-11T01:06:00+05:30",
    updatedAt: "2022-05-11T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "37236383-7792-4a3d-afff-f6a624bc55a6",
    content: "Just finished my new piece! Show some love guys!",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687931196/socialMedia/owais-kakar-qEqTcj7VeZQ-unsplash_wsipyr.jpg",
    mediaAlt: "Sketch",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Sarah",
          lastName: "Wilson",
          username: "wilsarah",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Emily",
          lastName: "Smith",
          username: "emilysmith",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "livparker",
    createdAt: "2022-05-10T01:06:00+05:30",
    updatedAt: "2022-05-10T01:06:00+05:30",
    comments: [
      {
        _id: "t7cZfWIp-qqwer",
        commentData: "Just amazing! You are an amazing artist.",
        firstName: "Emily",
        lastName: "Smith",
        username: "emilysmith",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
        createdAt: "2022-05-10T01:06:00+05:30",
        updatedAt: "2022-05-10T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "f0b613fb-81b4-47bc-9ca2-751a22977242",
    content:
      "Just tried this dish today. And gues what! It turned out purrrfectt!",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687931512/socialMedia/eiliv-aceron-ZuIDLSz3XLg-unsplash_vkluvd.jpg",
    mediaAlt: "FoodDish",
    likes: {
      likeCount: 5,
      likedBy: [
        {
          _id: "79Gksh9otl",
          firstName: "Sarah",
          lastName: "Wilson",
          username: "wilsarah",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "rohaaan",
    createdAt: "2023-06-12T01:06:00+05:30",
    updatedAt: "2023-06-12T01:06:00+05:30",
    comments: [
      {
        _id: "qq8zWjEeXdertgf",
        commentData:
          "I hope you prepared some extra for me also. I am coming right away to your place! 😂",
        firstName: "Olivia",
        lastName: "Parker",
        username: "livparker",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        createdAt: "2023-06-12T01:06:00+05:30",
        updatedAt: "2023-06-12T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "3cd5e18d-da71-4c4a-a3e5-46d529a8e039",
    content:
      "In the gentle touch of the waves, a reminder: You are loved, always. 💙",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687931847/socialMedia/nick-fewings-0ogq3xndxG0-unsplash_tcqo6r.jpg",
    mediaAlt: "Love Yourself Written In Sand",
    likes: {
      likeCount: 7,
      likedBy: [
        {
          _id: "M1NR81Bert",
          firstName: "Ava",
          lastName: "Turner",
          username: "avaturn",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "wilsarah",
    createdAt: "2023-06-10T01:06:00+05:30",
    updatedAt: "2023-06-10T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bertvbn",
        commentData: "🤩",
        firstName: "Ava",
        lastName: "Turner",
        username: "avaturn",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
        createdAt: "2023-06-11T01:06:00+05:30",
        updatedAt: "2023-06-11T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "d6c1f1e8-f8f2-46f2-9a6e-1886aa019479",
    content:
      "Adventure awaits as I set my sights on the mesmerizing city-state of Singapore! From vibrant streets to stunning skylines, I'm ready to explore the cultural tapestry, indulge in delectable cuisine, and uncover hidden gems.",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1688064342/socialMedia/bna-ignacio-C8gvt2LMX94-unsplash_rhwbim.jpg",
    mediaAlt: "Singapore",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Ava",
          lastName: "Turner",
          username: "avaturn",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "jacobmitch",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "ab8zWjEeXdwer",
        commentData: "Enjoy bro! Will wait for some gifts from Singapore.😉",
        firstName: "James",
        lastName: "Murphy",
        username: "jamesmurf",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "92faab82-f28d-4a64-8f56-14e17f27cb16",
    content:
      " Hackathon success unlocked! Proud and thrilled to have secured the second prize in an exhilarating coding showdown. It was an incredible experience collaborating, coding, and pushing boundaries to build innovative solutions.",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687932390/socialMedia/hero_hackathons_zbnfb8.jpg",
    mediaAlt: "hackathon",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Ava",
          lastName: "Turner",
          username: "avaturn",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "emilysmith",
    createdAt: "2023-03-17T01:06:00+05:30",
    updatedAt: "2023-03-17T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "bb019e8d-f5d9-483d-8260-04d1ab280e97",
    content:
      "💜 What an incredible performance! Enjoyed the show so much! The rhythm that transcends borders, the melodies that touch hearts. Grateful to be a part of this incredible fandom. ✨🚀 #BTS #ARMY #MusicMagic",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687932667/socialMedia/bts-concert-1_blse9a.png",
    mediaAlt: "BTS",
    likes: {
      likeCount: 6,
      likedBy: [
        {
          _id: "t7cZfWIp-q",
          firstName: "Emily",
          lastName: "Smith",
          username: "emilysmith",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Jacob",
          lastName: "Mitchell",
          username: "jacobmitch",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Ava",
          lastName: "Turner",
          username: "avaturn",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
        },
        {
          _id: "1NR81Bzmuh",
          firstName: "Aryan",
          lastName: "Patel",
          username: "aryan987",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330990/socialMedia/Aryan-Patel_cwyebe.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "wilsarah",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "qq8zWjEeXd4567",
        commentData: "Boraahaeeeeeee",
        firstName: "Olivia",
        lastName: "Parker",
        username: "livparker",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
      {
        _id: "t7cZfWIp-qpoiuy",
        commentData: "Yaay! Next time we'll go together!",
        firstName: "Emily",
        lastName: "Smith",
        username: "emilysmith",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "d09da77f-9613-4b0a-bc52-f24dd7bf9903",
    content:
      "Thrilled to embark on thrilling adventures, immerse in diverse cultures, and embrace the beauty of humanity. Let's meet, share stories, and build lasting friendships on this incredible journey called life. Travel and friendship are the greatest treasures that enrich our souls! 🌐💙 ",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 2,
      likedBy: [
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Jacob",
          lastName: "Mitchell",
          username: "jacobmitch",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "jacobmitch",
    createdAt: "2022-11-02T01:06:00+05:30",
    updatedAt: "2022-11-02T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "1975fbb2-ddf4-45a5-a362-650ea7d56de0",
    content:
      "Seeds planted, green dreams sown. Embarking on a blooming journey with my newfound gardening hobby! 🌱🌻 #GreenThumbsUp",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 3,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Ava",
          lastName: "Turner",
          username: "avaturn",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "emilysmith",
    createdAt: "2023-06-25T01:06:00+05:30",
    updatedAt: "2023-06-25T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "aa5b428e-f8c9-47de-9714-867ea7fea3eb",
    content:
      "Strumming into a new chapter of music. 🎸 Excited to unleash my melodies with this beautiful new guitar! #NewGuitarVibes",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687933153/socialMedia/42-north--G50vpGzaes-unsplash_k92mgi.jpg",
    mediaAlt: "Guitar",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "adityaj",
    createdAt: "2023-06-17T01:06:00+05:30",
    updatedAt: "2023-06-17T01:06:00+05:30",
    comments: [
      {
        _id: "M1NR81Bzlz98765",
        commentData: "Eager to hear your performance!",
        firstName: "Kriti",
        lastName: "Desai",
        username: "imkriti",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        createdAt: "2023-06-17T01:06:00+05:30",
        updatedAt: "2023-06-17T01:06:00+05:30",
      },
    ],
  },
  {
    _id: "490c8e54-73d3-41da-a249-98f123a974a7",
    content:
      "Embarking on a flavorful adventure as a food blogger! Join me on this mouthwatering journey filled with culinary delights and gastronomic wonders. 🍽️✨ #FoodBlogger #FoodieLife",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
        {
          _id: "M1NR81Bert",
          firstName: "Ava",
          lastName: "Turner",
          username: "avaturn",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "rohaaan",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [],
  },
  {
    _id: "c6826efc-35a3-4996-a7eb-090a7b143d01",
    content: "Went for a casual walk! Came across this beauty!",
    mediaURL:
      "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1687933371/socialMedia/recal-media-ueBIGLmiI5A-unsplash_slhlto.jpg",
    mediaAlt: "Sunset view",
    likes: {
      likeCount: 1,
      likedBy: [
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "imkriti",
    createdAt: formatDate(),
    updatedAt: formatDate(),
    comments: [
      {
        _id: "LCrc9f0Zl0qwaz",
        commentData: "I must praise your photography skills!",
        firstName: "Aditya",
        lastName: "Joshi",
        username: "adityaj",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        createdAt: formatDate(),
        updatedAt: formatDate(),
      },
    ],
  },
  {
    _id: "d4ae83ad-39b8-4c04-8de0-f3492c3f5981",
    content:
      "Photography, my window to the world, where creativity meets vision. From breathtaking landscapes to candid portraits, I'm endlessly inspired by the beauty that surrounds us.",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 7,
      likedBy: [
        {
          _id: "M1NR81Bert",
          firstName: "Ava",
          lastName: "Turner",
          username: "avaturn",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Jacob",
          lastName: "Mitchell",
          username: "jacobmitch",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
        {
          _id: "ab8zWjEeXd",
          firstName: "James",
          lastName: "Murphy",
          username: "jamesmurf",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331038/socialMedia/James-Murphy_djl3zv.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "aryan987",
    createdAt: "2023-01-27T01:06:00+05:30",
    updatedAt: "2023-01-27T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "5c8b26ce-934c-4dc7-a09a-59d7a17b20f6",
    content:
      "Forever grateful for the guiding light and unconditional love of my incredible parents. They have been my rock, my inspiration, and my unwavering support system. Their love and sacrifices have shaped me into the person I am today. Words cannot express how blessed I am to have them by my side. Mom and Dad, you are my heroes, my forever source of love and strength. ❤️",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 8,
      likedBy: [
        {
          _id: "M1NR81Bert",
          firstName: "Ava",
          lastName: "Turner",
          username: "avaturn",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331028/socialMedia/Ava-Turner_vqavsz.jpg",
        },
        {
          _id: "qq8zWjEeXd",
          firstName: "Olivia",
          lastName: "Parker",
          username: "livparker",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331058/socialMedia/Olivia-Parker_nbmkdw.jpg",
        },
        {
          _id: "1T6Be1QpLm",
          firstName: "Jacob",
          lastName: "Mitchell",
          username: "jacobmitch",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
        {
          _id: "t7cZfWIp-q",
          firstName: "Emily",
          lastName: "Smith",
          username: "emilysmith",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331085/socialMedia/Emily-Smith_jfepcx.jpg",
        },
        {
          _id: "79Gksh9otl",
          firstName: "Sarah",
          lastName: "Wilson",
          username: "wilsarah",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331082/socialMedia/Sarah-Wilson_io6cpx.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "jamesmurf",
    createdAt: "2021-06-07T01:06:00+05:30",
    updatedAt: "2021-06-07T01:06:00+05:30",
    comments: [],
  },
  {
    _id: "eaf91a20-5b28-4027-a6b2-bae97d76681a",
    content:
      "Yaay! Finally Goa adventure begins! The countdown begins for an unforgettable getaway filled with laughter, memories, and beach vibes. Let's make this trip one for the books! 🌊🎉",
    mediaURL: "",
    mediaAlt: "",
    likes: {
      likeCount: 4,
      likedBy: [
        {
          _id: "1T6Be1QpLm",
          firstName: "Jacob",
          lastName: "Mitchell",
          username: "jacobmitch",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        },
        {
          _id: "o5gzWjEeX_",
          firstName: "Rohan",
          lastName: "Roy",
          username: "rohaaan",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        },
        {
          _id: "LCrc9f0Zl0",
          firstName: "Aditya",
          lastName: "Joshi",
          username: "adityaj",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331041/socialMedia/Aditya-Joshi_ajn3sy.jpg",
        },
        {
          _id: "M1NR81Bzlz",
          firstName: "Kriti",
          lastName: "Desai",
          username: "imkriti",
          profileAvatar:
            "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331046/socialMedia/Kriti-Desai_wuflhp.jpg",
        },
      ],
      dislikedBy: [],
    },
    username: "avaturn",
    createdAt: "2021-08-23T01:06:00+05:30",
    updatedAt: "2021-08-23T01:06:00+05:30",
    comments: [
      {
        _id: "1T6Be1QpLmaszx",
        commentData: "Yo! Let's rock there!",
        firstName: "Jacob",
        lastName: "Mitchell",
        username: "jacobmitch",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686331002/socialMedia/Jacob-Mitchell_elh9gg.jpg",
        createdAt: "2021-08-23T01:06:00+05:30",
        updatedAt: "2021-08-23T01:06:00+05:30",
      },
      {
        _id: "o5gzWjEeX_9876",
        commentData:
          "Have an incredible time exploring the beaches, soaking up the vibrant culture, and indulging in delicious seafood. Safe travels! ",
        firstName: "Rohan",
        lastName: "Roy",
        username: "rohaaan",
        profileAvatar:
          "https://res.cloudinary.com/dxnbnviuz/image/upload/w_400,f_auto,q_auto/v1686330965/socialMedia/Rohan-Roy_zk6dlm.jpg",
        createdAt: "2021-08-24T01:06:00+05:30",
        updatedAt: "2021-08-24T01:06:00+05:30",
      },
    ],
  },
];
