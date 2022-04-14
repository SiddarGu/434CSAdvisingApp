window.onsubmit=validateData;

function validateData() {
	
	
    var track = localStorage.getItem("whichTrack")
    console.log(track);
    classes = [];
    for (let i = 0; i < 336; i+= 3) {
        var field = document.getElementById("val"+i).value;
        if (field != "") {
            classes.push(field);
        }
    }

    var message = "";
    message += completedLowerMath(classes, track == 'datsci');
    message += completedLowerCS(classes, false, false, false, false);
    if (track == 'gentrack') {
        message += completedGeneralTrack(classes);
    } else if (track == 'cybsec') {
        message += completedCybersecurity(classes);
    } else if (track == 'datsci') {
        message += completedDataScience(classes);
    } else if (track == 'maclearn') {
        message += completedMachineLearning(classes);
    } else if (track == 'quant') {
        message += completedQuantumInformation(classes);
    }

    if (message == "")
        return window.confirm("Do you want to submit the form data?");
    else {
        alert(message);
        return false;
    }
}


/* checkers */

var CMSCCourses = [
    {
        "course_id": "CMSC100",
        "semester": "202208",
        "name": "Bits and Bytes of Computer and Information Sciences",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "Students are introduced to the fields (and disciplines) of computer science and information science within a small classroom setting. They will learn to make a successful transition from high school to the university, while exploring study skills, student success plans and research opportunities.",
        "grading_method": [
            "Regular",
            "Pass-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": "For first time freshmen and first time transfer students.",
            "additional_info": "Cross-listed with: INST101.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC100 or INST101."
        },
        "sections": [
            "CMSC100-0101",
            "CMSC100-0201"
        ]
    },
    {
        "course_id": "CMSC106",
        "semester": "202208",
        "name": "Introduction to C Programming",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "4",
        "description": "Design and analysis of programs in C. An introduction to computing using structured programming concepts. Intended for students with no or minimal programming experience.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH115.",
            "formerly": null,
            "restrictions": "Must not be in Computer Science program; and must not have completed any courses from CMSC131-499 course range.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC106 or CMSC122."
        },
        "sections": [
            "CMSC106-0101"
        ]
    },
    {
        "course_id": "CMSC122",
        "semester": "202208",
        "name": "Introduction to Computer Programming via the Web",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Introduction to computer programming in the context of developing full featured dynamic web sites. Uses a problem solving approach to teach basics of program design and implementation using JavaScript; relates these skills to creation of dynamic web sites; then explores both the potential and limits of web-based information sources for use in research. Intended to help relate a student's major to these emerging technologies.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [
            [
                "DSSP"
            ]
        ],
        "core": [
            "I"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": "Must not have completed any courses from CMSC131-499 course range; and must not be concurrently enrolled in CMSC131.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC106, or CMSC122."
        },
        "sections": [
            "CMSC122-0101",
            "CMSC122-FC01"
        ]
    },
    {
        "course_id": "CMSC125",
        "semester": "202208",
        "name": "Introduction to Computing",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Introduces you to the computing field as a whole. You will gain skills used across the spectrum of computing majors and learn about the great variety of routes into the various areas of study and employment in technological fields.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Must have completed or be concurrently enrolled in MATH115 or higher.",
            "formerly": null,
            "restrictions": "Must not be in the Computer Science program; and must not have completed any courses from CMSC131-499; and must not have completed INST126 or INST127.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC125-0101",
            "CMSC125-FC01"
        ]
    },
    {
        "course_id": "CMSC131",
        "semester": "202208",
        "name": "Object-Oriented Programming I",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "4",
        "description": "Introduction to programming and computer science. Emphasizes understanding and implementation of applications using object-oriented techniques. Develops skills such as program design and testing as well as implementation of programs using a graphical IDE. Programming done in Java.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": "MATH140.",
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC131 or IMDM127."
        },
        "sections": [
            "CMSC131-0101",
            "CMSC131-0103",
            "CMSC131-0202",
            "CMSC131-0105",
            "CMSC131-0106",
            "CMSC131-0108",
            "CMSC131-0109",
            "CMSC131-0203",
            "CMSC131-0204",
            "CMSC131-0205",
            "CMSC131-0206",
            "CMSC131-0207",
            "CMSC131-0209",
            "CMSC131-0301",
            "CMSC131-0302",
            "CMSC131-0303",
            "CMSC131-0304",
            "CMSC131-0305",
            "CMSC131-0307",
            "CMSC131-0308",
            "CMSC131-0309",
            "CMSC131-0401",
            "CMSC131-0402",
            "CMSC131-0403",
            "CMSC131-0404",
            "CMSC131-0405",
            "CMSC131-0406",
            "CMSC131-0407",
            "CMSC131-0408",
            "CMSC131-0410",
            "CMSC131-0208",
            "CMSC131-FC01",
            "CMSC131-0102",
            "CMSC131-0104",
            "CMSC131-0201"
        ]
    },
    {
        "course_id": "CMSC132",
        "semester": "202208",
        "name": "Object-Oriented Programming II",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "4",
        "description": "Introduction to use of computers to solve problems using software engineering principles. Design, build, test, and debug medium -size software systems and learn to use relevant tools. Use object-oriented methods to create effective and efficient problem solutions. Use and implement application programming interfaces (APIs). Programming done in Java.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC131; or must have earned a score of 5 on the A Java AP exam; or must have earned a satisfactory score on the departmental placement exam.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "And minimum grade of C- in MATH140.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC132-0105",
            "CMSC132-0106",
            "CMSC132-0108",
            "CMSC132-0201",
            "CMSC132-0202",
            "CMSC132-0203",
            "CMSC132-0204",
            "CMSC132-0205",
            "CMSC132-0207",
            "CMSC132-0301",
            "CMSC132-0302",
            "CMSC132-0303",
            "CMSC132-0304",
            "CMSC132-0101",
            "CMSC132-0102",
            "CMSC132-0103",
            "CMSC132-0104"
        ]
    },
    {
        "course_id": "CMSC133",
        "semester": "202208",
        "name": "Object Oriented Programming I Beyond Fundamentals",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "2",
        "description": "An introduction to computer science and object-oriented programming for students with prior Java programming knowledge (conditionals, loops, methods). Program design, implementation, and testing using object-oriented techniques. All programming will be done in Java using a graphical IDE.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": "MATH140.",
            "prereqs": null,
            "formerly": null,
            "restrictions": "Permission of CMNS-Computer Science department; and student must have earned a 4 on the AP Computer Science A exam or a satisfactory score on the CMSC131 department placement exam.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC131 or CMSC133."
        },
        "sections": [
            "CMSC133-0101"
        ]
    },
    {
        "course_id": "CMSC216",
        "semester": "202208",
        "name": "Introduction to Computer Systems",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "4",
        "description": "Introduction to the interaction between user programs and the operating system/hardware. Major topics include C programming, introductory systems programming, and assembly language. Other concepts covered include UNIX, machine data representation, thread management, optimization, and virtual memory. Programming is done in the Linux Environment.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC132; and minimum grade of C- in MATH141.",
            "formerly": null,
            "restrictions": "Must be in a major within the CMNS-Computer Science department; or must be in Engineering: Computer program; or must be in the Computer Science Minor program; and Permission of CMSC - Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC216-0102",
            "CMSC216-0103",
            "CMSC216-0104",
            "CMSC216-0105",
            "CMSC216-0106",
            "CMSC216-0107",
            "CMSC216-0108",
            "CMSC216-0201",
            "CMSC216-0202",
            "CMSC216-0203",
            "CMSC216-0204",
            "CMSC216-0205",
            "CMSC216-0206",
            "CMSC216-0207",
            "CMSC216-0208",
            "CMSC216-0301",
            "CMSC216-0302",
            "CMSC216-0303",
            "CMSC216-0101",
            "CMSC216-0304"
        ]
    },
    {
        "course_id": "CMSC250",
        "semester": "202208",
        "name": "Discrete Structures",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "4",
        "description": "Fundamental mathematical concepts related to computer science, including finite and infinite sets, relations, functions, and propositional logic. Introduction to other techniques, modeling and solving problems in computer science. Introduction to permutations, combinations, graphs, and trees with selected applications.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC131; and minimum grade of C- in MATH141.",
            "formerly": null,
            "restrictions": "Must be in a major within the CMNS-Computer Science department; or must be in Engineering: Computer program; or must be in the Computer Science Minor program; and Permissions of CMSC - Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC250-0101",
            "CMSC250-0102",
            "CMSC250-0103",
            "CMSC250-0104",
            "CMSC250-0105",
            "CMSC250-0107",
            "CMSC250-0108",
            "CMSC250-0201",
            "CMSC250-0202",
            "CMSC250-0203",
            "CMSC250-0204",
            "CMSC250-0205",
            "CMSC250-0206",
            "CMSC250-0207",
            "CMSC250-0208",
            "CMSC250-0301",
            "CMSC250-0302",
            "CMSC250-0303",
            "CMSC250-0305",
            "CMSC250-0304"
        ]
    },
    {
        "course_id": "CMSC298A",
        "semester": "202208",
        "name": "Special Topics in Computer Science",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "CMSC320",
        "semester": "202208",
        "name": "Introduction to Data Science",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "An introduction to the data science pipeline, i.e., the end-to-end process of going from unstructured, messy data to knowledge and actionable insights. Provides a broad overview of several topics including statistical data analysis, basic data mining and machine learning algorithms, large-scale data management, cloud computing, and information visualization.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC216 and CMSC250.",
            "formerly": null,
            "restrictions": "Permission of CMNS-Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "STAT426 or CMSC320."
        },
        "sections": [
            "CMSC320-0101",
            "CMSC320-0201"
        ]
    },
    {
        "course_id": "CMSC330",
        "semester": "202208",
        "name": "Organization of Programming Languages",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "A study of programming languages, including their syntax, semantics, and implementation. Several different models of languages are discussed, including dynamic, scripting (e.g., Ruby, Python) functional (e.g., OCaml, Haskell, Scheme), and memory safe systems programming (e.g., Rust). Explores language features such as formal syntax, scoping and binding of variables, higher-order programming, typing, and type polymorphism. Introduces finite automata, context free grammar, parsing, lambda calculus, and basics of security attacks and software security.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC250 and CMSC216.",
            "formerly": null,
            "restrictions": "Must be in a major within the CMNS-Computer Science department; or must be in the Computer Science Minor program; or must be in Engineering: Computer program; and Permission of CMSC - Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC330-0101",
            "CMSC330-0102",
            "CMSC330-0103",
            "CMSC330-0104",
            "CMSC330-0105",
            "CMSC330-0106",
            "CMSC330-0107",
            "CMSC330-0108",
            "CMSC330-0201",
            "CMSC330-0202",
            "CMSC330-0203",
            "CMSC330-0204",
            "CMSC330-0205",
            "CMSC330-0206",
            "CMSC330-0207",
            "CMSC330-0208",
            "CMSC330-0209"
        ]
    },
    {
        "course_id": "CMSC335",
        "semester": "202208",
        "name": "Web Application Development with JavaScript",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Provides an introduction to modern ways of developing Web Applications/Services using JavaScript for both front-end and back-end. The course covers topics on fundamental JavaScript language constructs, server-side JavaScript, back-end data persistence, and client-side JavaScript to build Web Applications that interact with Web services and back-end databases.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC216 and CMSC250.",
            "formerly": "CMSC389N.",
            "restrictions": "Permission of CMNS-Computer Science Department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC389N or CMSC335."
        },
        "sections": [
            "CMSC335-0101"
        ]
    },
    {
        "course_id": "CMSC351",
        "semester": "202208",
        "name": "Algorithms",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "A systematic study of the complexity of some elementary algorithms related to sorting, graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC250 and CMSC216.",
            "formerly": null,
            "restrictions": "Must be in a major within the CMNS-Computer Science department; or must be in Engineering: Computer program; or must be in the Computer Science Minor program; and Permission from the CMSC - Computer Science department.",
            "additional_info": "CMSC351 may not count as one of the required upper level CMSC courses for students who are required to have 24 upper level CMSC credits for graduation, i.    e. for students who became computer science majors prior to Fall, 2002.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC251 or CMSC351."
        },
        "sections": [
            "CMSC351-0101",
            "CMSC351-0201"
        ]
    },
    {
        "course_id": "CMSC351H",
        "semester": "202208",
        "name": "Algorithms",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "A systematic study of the complexity of some elementary algorithms related to sorting, graphs and trees, and combinatorics. Algorithms are analyzed using mathematical techniques to solve recurrences and summations.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC250 and CMSC216.",
            "formerly": null,
            "restrictions": "Must be in a major within the CMNS-Computer Science department; or must be in Engineering: Computer program; or must be in the Computer Science Minor program; and Permission from the CMSC - Computer Science department.",
            "additional_info": "CMSC351 may not count as one of the required upper level CMSC courses for students who are required to have 24 upper level CMSC credits for graduation, i.    e. for students who became computer science majors prior to Fall, 2002.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC251 or CMSC351."
        },
        "sections": [
            "CMSC351H-0101"
        ]
    },
    {
        "course_id": "CMSC396H",
        "semester": "202208",
        "name": "Computer Science Honors Seminar",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "Overview of computer science research activities, techniques, and tools. Diverse research areas will be covered, including systems, networks, artificial intelligence, human-computer interaction, software engineering, graphics, vision, and theory.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Must have admission into Computer Science Departmental Honors Program.",
            "formerly": "CMSC297.",
            "restrictions": "Permission of CMNS-Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC297 or CMSC396."
        },
        "sections": [
            "CMSC396H-0101"
        ]
    },
    {
        "course_id": "CMSC411",
        "semester": "202208",
        "name": "Computer Systems Architecture",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Input/output processors and techniques. Intra-system communication, buses, caches. Addressing and memory hierarchies. Microprogramming, parallelism, and pipelining.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330; or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "formerly": null,
            "restrictions": "Permission of CMNS-Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "ENEE446 or CMSC411."
        },
        "sections": [
            "CMSC411-0101"
        ]
    },
    {
        "course_id": "CMSC412",
        "semester": "202208",
        "name": "Operating Systems",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "4",
        "description": "A hands-on introduction to operating systems, including topics in: multiprogramming, communication and synchronization, memory management, IO subsystems, and resource scheduling polices. The laboratory component consists of constructing a small kernel, including functions for device IO, multi-tasking, and memory management.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [
            "S"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330 and CMSC351; and 1 course with a minimum grade of C- from (CMSC414, CMSC417, CMSC420, CMSC430, CMSC433, CMSC435, ENEE440, ENEE457).",
            "formerly": null,
            "restrictions": "Permission of CMNS-Computer Science department; or must be in one of the following programs (Computer Science (Master's); Computer Science (Doctoral)).",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC412 or ENEE447."
        },
        "sections": [
            "CMSC412-0101",
            "CMSC412-0102"
        ]
    },
    {
        "course_id": "CMSC414",
        "semester": "202208",
        "name": "Computer and Network Security",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "An introduction to the topic of security in the context of computer systems and networks. Identify, analyze, and solve network-related security problems in computer systems. Fundamentals of number theory, authentication, and encryption technologies, as well as the practical problems that have to be solved in order to make those technologies workable in a networked environment, particularly in the wide-area Internet environment.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330 and CMSC351; or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "formerly": null,
            "restrictions": "Permission of CMNS-Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC414, ENEE459C, or ENEE457."
        },
        "sections": [
            "CMSC414-0101"
        ]
    },
    {
        "course_id": "CMSC416",
        "semester": "202208",
        "name": "Introduction to Parallel Computing",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Introduction to parallel computing. Topics include programming for shared memory and distributed memory parallel architectures, and fundamental issues in design, development, and performance analysis of parallel programs.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330 and CMSC351; or permission of instructor.",
            "formerly": "CMSC498X.",
            "restrictions": "Permission of CMNS-Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC416 or CMSC498X."
        },
        "sections": [
            "CMSC416-0101"
        ]
    },
    {
        "course_id": "CMSC417",
        "semester": "202208",
        "name": "Computer Networks",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Computer networks and architectures. The OSI model including discussion and examples of various network layers. A general introduction to existing network protocols. Communication protocol specification, analysis, and testing.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC351 and CMSC330; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC417-0101"
        ]
    },
    {
        "course_id": "CMSC420",
        "semester": "202208",
        "name": "Advanced Data Structures",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Description, properties, and storage allocation functions of data structures including balanced binary trees, B-Trees, hash tables, skiplists, tries, KD-Trees and Quadtrees. Algorithms for manipulating structures. Applications from areas such as String Processing, Computer Graphics, Information Retrieval, Computer Networks, Computer Vision, and Operating Systems.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC351 and CMSC330; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC420-0101",
            "CMSC420-0201",
            "CMSC420-0301",
            "CMSC420-0401"
        ]
    },
    {
        "course_id": "CMSC421",
        "semester": "202208",
        "name": "Introduction to Artificial Intelligence",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Introduces a range of ideas and methods in AI, varying semester to semester but chosen largely from: automated heuristic search, planning, games, knowledge representation, logical and statistical inference, learning, natural language processing, vision, robotics, cognitive modeling, and intelligent agents. Programming projects will help students obtain a hands-on feel for various topics.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC351 and CMSC330; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC421-0101",
            "CMSC421-0201"
        ]
    },
    {
        "course_id": "CMSC422",
        "semester": "202208",
        "name": "Introduction to Machine Learning",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Machine Learning studies representations and algorithms that allow machines to improve their performance on a task from experience. This is a broad overview of existing methods for machine learning and an introduction to adaptive systems in general. Emphasis is given to practical aspects of machine learning and data mining.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC320, CMSC330, and CMSC351; and 1 course with a minimum grade of C- from (MATH240, MATH461); and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC422-0101",
            "CMSC422-0201"
        ]
    },
    {
        "course_id": "CMSC423",
        "semester": "202208",
        "name": "Bioinformatic Algorithms, Databases, and Tools",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "An introduction to the main algorithms, databases, and tools used in bioinformatics. Topics may include assembly and analysis of genome sequences, reconstructing evolutionary histories, predicting protein structure, and clustering of biological data. Use of scripting languages to perform analysis tasks on biological data. No prior knowledge of biology is assumed.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC351 and CMSC330; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC423-0101"
        ]
    },
    {
        "course_id": "CMSC424",
        "semester": "202208",
        "name": "Database Design",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Students are introduced to database systems and motivates the database approach as a mechanism for modeling the real world. An in-depth coverage of the relational model, logical database design, query languages, and other database concepts including query optimization, concurrency control; transaction management, and log based crash recovery. Distributed and Web database architectures are also discussed.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [
            "S"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC351 and CMSC330; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC424-0101",
            "CMSC424-0201"
        ]
    },
    {
        "course_id": "CMSC425",
        "semester": "202208",
        "name": "Game Programming",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "An introduction to the principles and practice of computer game programming and design. This includes an introduction to game hardware and systems, the principles of game design, object and terrain modeling, game physics, artificial intelligence for games, networking for games, rendering and animation, and aural rendering. Course topics are reinforced through the design and implementation of a working computer game.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC420.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC425-0101"
        ]
    },
    {
        "course_id": "CMSC426",
        "semester": "202208",
        "name": "Computer Vision",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "An introduction to basic concepts and techniques in computervision. This includes low-level operations such as image filtering and edge detection, 3D reconstruction of scenes using stereo and structure from motion, and object detection, recognition and classification.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330 and CMSC351 and 1 course with a minimum grade of C- from (MATH240, MATH341, MATH461); or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program; or permission of the instructor.",
            "formerly": null,
            "restrictions": "Permission of CMNS-Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC426-0101"
        ]
    },
    {
        "course_id": "CMSC427",
        "semester": "202208",
        "name": "Computer Graphics",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "An introduction to 3D computer graphics, focusing on the underlying building blocks and algorithms for applications such as 3D computer games, and augmented and virtual reality (AR/VR). Covers the basics of 3D image generation and 3D modeling, with an emphasis on interactive applications. Discusses the representation of 3D geometry, 3D transformations, projections, rasterization, basics of color spaces, texturing and lighting models, as well as programming of modern Graphics Processing Units (GPUs). Includes programming projects where students build their own 3D rendering engine step-by-step.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH240; and minimum grade of C- in CMSC420; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC427-0101"
        ]
    },
    {
        "course_id": "CMSC430",
        "semester": "202208",
        "name": "Introduction to Compilers",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Topics include lexical analysis, parsing, intermediate representations, program analysis, optimization, and code generation.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330 and CMSC351; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC430-0101"
        ]
    },
    {
        "course_id": "CMSC433",
        "semester": "202208",
        "name": "Programming Language Technologies and Paradigms",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Programming language technologies (e.g., object-oriented programming), their implementations and use in software design and implementation.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330; or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "formerly": null,
            "restrictions": "Permission of CMNS-Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC433-0101"
        ]
    },
    {
        "course_id": "CMSC434",
        "semester": "202208",
        "name": "Introduction to Human-Computer Interaction",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Assess usability by quantitative and qualitative methods. Conduct task analyses, usability tests, expert reviews, and continuing assessments of working products by interviews, surveys, and logging. Apply design processes and guidelines to develop professional quality user interfaces. Build low-fidelity paper mockups, and a high-fidelity prototype using contemporary tools such as graphic editors and a graphical programming environment (eg: Visual Basic, Java).",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330 and CMSC351; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC434-0101",
            "CMSC434-0201"
        ]
    },
    {
        "course_id": "CMSC435",
        "semester": "202208",
        "name": "Software Engineering",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "State-of-the-art techniques in software design and development. Laboratory experience in applying the techniques covered. Structured design, structured programming, top-down design and development, segmentation and modularization techniques, iterative enhancement, design and code inspection techniques, correctness, and chief-programmer teams. The development of a large software project.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [
            "S"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (CMSC412, CMSC417, CMSC420, CMSC430, CMSC433); and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC435-0101"
        ]
    },
    {
        "course_id": "CMSC436",
        "semester": "202208",
        "name": "Programming Handheld Systems",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Fundamental principles and concepts that underlie the programming of handheld systems, such as mobile phones, personal digital assistants, and tablet computers. Particular emphasis will be placed on concepts such as limited display size, power, memory and CPU speed; and new input modalities, where handheld systems differ substantially from non-handheld systems, and thus require special programming tools and approaches. Students will apply these concepts and principles in the context of an existing handset programming platform.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330 and CMSC351; or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "formerly": null,
            "restrictions": "Permission of CMNS-Computer Science department.",
            "additional_info": "Course will be based on the iOS platform. Students must have access to a Macintosh computer to participate in this course.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC436-0101"
        ]
    },
    {
        "course_id": "CMSC451",
        "semester": "202208",
        "name": "Design and Analysis of Computer Algorithms",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Fundamental techniques for designing efficient computer algorithms, proving their correctness, and analyzing their complexity. General topics include graph algorithms, basic algorithm design paradigms (such as greedy algorithms, divide-and-conquer, and dynamic programming), network flows, NP-completeness, and other selected topics in algorithms.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC351; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC451-0101",
            "CMSC451-0201"
        ]
    },
    {
        "course_id": "CMSC452",
        "semester": "202208",
        "name": "Elementary Theory of Computation",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Techniques are developed to determine the difficulty of a problem relative to a model of computation. Topics include Finite Automata, P, NP, decidability, undecidability, and communication complexity.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC351; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC452-0101"
        ]
    },
    {
        "course_id": "CMSC454",
        "semester": "202208",
        "name": "Algorithms for Data Science",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Fundamental methods for processing a high volume of data. Methods include stream processing, locally sensitive hashing, web search methods, page rank computation, network and link analysis, dynamic graph algorithms as well as methods to handle high dimensional data/dimensionality reduction.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC330 and CMSC351.",
            "formerly": "CMSC498U.",
            "restrictions": "Permission of CMSC-Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC454 or CMSC498U."
        },
        "sections": [
            "CMSC454-0101"
        ]
    },
    {
        "course_id": "CMSC456",
        "semester": "202208",
        "name": "Cryptography",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "The theory, application, and implementation of mathematical techniques used to secure modern communications. Topics include symmetric and public-key encryption, message integrity, hash functions, block-cipher design and analysis, number theory, and digital signatures.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "(CMSC106, CMSC131, or ENEE150; or equivalent programming experience); and (2 courses from (CMSC330, CMSC351, ENEE324, or ENEE380); or any one of these courses and a 400-level MATH course, or two 400-level MATH courses).",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or permission of instructor.",
            "also_offered_as": "MATH456, ENEE456.",
            "credit_granted_for": "MATH456, CMSC456, or ENEE456."
        },
        "sections": [
            "CMSC456-0101",
            "CMSC456-0201"
        ]
    },
    {
        "course_id": "CMSC460",
        "semester": "202208",
        "name": "Computational Methods",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Basic computational methods for interpolation, least squares, approximation, numerical quadrature, numerical solution of polynomial and transcendental equations, systems of linear equations and initial value problems for ordinary differential equations. Emphasis on methods and their computational properties rather than their analytic aspects. Intended primarily for students in the physical and engineering sciences.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH341, MATH461); and 1 course with a minimum grade of C- from (MATH241, MATH340); and 1 course with a minimum grade of C- from (CMSC106, CMSC131); and minimum grade of C- in MATH246.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": "AMSC460.",
            "credit_granted_for": "AMSC460, AMSC466, CMSC460, or CMSC466."
        },
        "sections": [
            "CMSC460-0101",
            "CMSC460-0201",
            "CMSC460-0301",
            "CMSC460-0401"
        ]
    },
    {
        "course_id": "CMSC466",
        "semester": "202208",
        "name": "Introduction to Numerical Analysis I",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Floating point computations, direct methods for linear systems, interpolation, solution of nonlinear equations.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH341, MATH461); and 1 course with a minimum grade of C- from (MATH241, MATH340); and 1 course with a minimum grade of C- from (CMSC106, CMSC131); and minimum grade of C- in MATH410.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": "AMSC466.",
            "credit_granted_for": "AMSC460, CMSC460, AMSC466, or CMSC466."
        },
        "sections": [
            "CMSC466-0101"
        ]
    },
    {
        "course_id": "CMSC470",
        "semester": "202208",
        "name": "Introduction to Natural Language Processing",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Introduction to fundamental techniques for automatically processing and generating natural language with computers. Machine learning techniques, models, and algorithms that enable computers to deal with the ambiguity and implicit structure of natural language. Application of these techniques in a series of assignments designed to address a core application such as question answering or machine translation.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC320, CMSC330, and CMSC351; and 1 course with a minimum grade of C- from (MATH240, MATH461).",
            "formerly": null,
            "restrictions": "Permission of CMNS-Computer Science department.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC470-0101"
        ]
    },
    {
        "course_id": "CMSC473",
        "semester": "202208",
        "name": "Capstone in Machine Learning",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Semester-long project course in which each student will identify and carry out a project related to machine learning, with the goal of publishing a research paper or software tool.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- or higher in CMSC421 or CMSC422.",
            "formerly": "CMSC498P.",
            "restrictions": "Permission of instructor and Permission of CMSC - Computer Science department.",
            "additional_info": "Students will be paired with project advisors from the UMD faculty or alternatively, an industry advisor.  Recommended: Background or exposure to machine learning topics is strongly encouraged.     Students are encouraged to plan for projects results that can be published at academic conferences or will impact academic research.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC498P or CMSC473."
        },
        "sections": [
            "CMSC473-0101"
        ]
    },
    {
        "course_id": "CMSC474",
        "semester": "202208",
        "name": "Introduction to Computational Game Theory",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Game theory deals with interactions among agents (either human or computerized) whose objectives and preferences may differ from the objectives and preferences of the other agents. It will also provide a comprehensive introduction to game theory, concentrating on its computational aspects.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC351 and CMSC330; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or must be in the (Computer Science (Doctoral), Computer Science (Master's)) program.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC474, ECON414, GVPT390 or GVPT399A."
        },
        "sections": [
            "CMSC474-0101"
        ]
    },
    {
        "course_id": "CMSC475",
        "semester": "202208",
        "name": "Combinatorics and Graph Theory",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "General enumeration methods, difference equations, generating functions. Elements of graph theory, matrix representations of graphs, applications of graph theory to transport networks, matching theory and graphical algorithms.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH341, MATH461); and 1 course with a minimum grade of C- from (MATH241, MATH340).",
            "formerly": null,
            "restrictions": null,
            "additional_info": "And permission of CMNS-Computer Science department; or permission of CMNS-Mathematics department.  Cross-listed with MATH475 .",
            "also_offered_as": null,
            "credit_granted_for": "MATH475 or CMSC475."
        },
        "sections": [
            "CMSC475-0101"
        ]
    },
    {
        "course_id": "CMSC488A",
        "semester": "202208",
        "name": "Special Topics in Computer Science; Quantum Boot Camp",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "Prerequisites: MATH141 and either MATH240 or PHYS274; or equivalent course work.   Designed for computer science, engineering and mathematics majors. Introduces basic concepts and techniques widely used in quantum information science.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": "ENEE489F, PHYS499F, and CHPH499F.",
            "credit_granted_for": "PHYS499F, ENEE489F, CMSC488A, or CHPH499F."
        },
        "sections": [
            "CMSC488A-0101"
        ]
    },
    {
        "course_id": "CMSC498A",
        "semester": "202208",
        "name": "Selected Topics in Computer Science",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "CMSC498I",
        "semester": "202208",
        "name": "Selected Topics in Computer Science; Real World Computer Security",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC498I-0101"
        ]
    },
    {
        "course_id": "CMSC499A",
        "semester": "202208",
        "name": "Independent Undergraduate Research",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "CMSC614",
        "semester": "202208",
        "name": "Computer and Network Security",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Advanced topics in computer and network security, including: anonymity, privacy, memory safety, malware, denial of service attacks, trusted hardware, security design principles, and empirically measuring security \"in the wild\". This will be a largely paper-driven course (there is no textbook), preparing students for research in (or around) the broad area of security. Students will gain first-hand experience launching attacks in controlled environments. The bulk of the grade will be based on a final, semester-long group project.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": "CMSC818O.",
            "restrictions": "Must be in the Computer Science Master's or Doctoral programs.",
            "additional_info": "Recommended: Knowledge of C programming.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC818O or CMSC614."
        },
        "sections": [
            "CMSC614-0101"
        ]
    },
    {
        "course_id": "CMSC624",
        "semester": "202208",
        "name": "Database System Architecture and Implementation",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "In-depth overview of database architectures--both the mainstream traditional architecture and more modern architectures that are especially prevalent in cloud implementations. Topics include different architectural choices for different application spaces and the tradeoffs inherent in choices and building different parts of database systems.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "CMSC424; or students who have taken courses with comparable content may contact the department.",
            "formerly": "CMSC828N.",
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC624 or CMSC828N."
        },
        "sections": [
            "CMSC624-0101"
        ]
    },
    {
        "course_id": "CMSC630",
        "semester": "202208",
        "name": "Foundations of Software Verification",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Topics in program verification. Operational semantics of programs. Preconditions and postconditions. Axiomatic proof systems and predicate transformers. Temporal logic and model checking. Process algebra, semantic equivalences and algebraic reasoning.",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "CMSC330; or students who have taken courses with comparable content may contact the department; or permission of instructor.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC630-0101"
        ]
    },
    {
        "course_id": "CMSC634",
        "semester": "202208",
        "name": "Empirical Research Methods for Computer Science",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "A graduate-level introductory course on empirical reseach methods for computer scientists. Experimental techniques for evaluating software systems and processes, human performance using interfaces, programming environments, and software engineering methods. Introduction to constructs and methods of measurements, qualitative and quantitative design, quasi-experimental and non-experimental design, baseline design, and statistical analysis.",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": "Must be in Computer Science (Master's) program; or must be in Computer Science (Doctoral) program; or permission of instructor.",
            "additional_info": "Recommended: An introductory statistics class.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC838G (Fall2005) or CMSC634."
        },
        "sections": [
            "CMSC634-0101"
        ]
    },
    {
        "course_id": "CMSC657",
        "semester": "202208",
        "name": "Introduction to Quantum Information Processing",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "An introduction to the field of quantum information processing. Students will be prepared to pursue further study in quantum computing, quantum information theory, and related areas.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Familiarity with complex numbers and basic concepts in linear algebra (e.",
            "formerly": "CMSC858K.",
            "restrictions": null,
            "additional_info": "Previous background in quantum mechanics or theory of computation is not required. g., eigenvalues, eigenvectors, Hermitian and unitary matrices) is required.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC657 or CMSC858K."
        },
        "sections": [
            "CMSC657-0101"
        ]
    },
    {
        "course_id": "CMSC660",
        "semester": "202208",
        "name": "Scientific Computing I",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Monte Carlo simulation, numerical linear algebra, nonlinear systems and continuation method, optimization, ordinary differential equations. Fundamental techniques in scientific computation with an introduction to the theory and software for each topic.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Must have knowledge of C or Fortran.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "And CMSC466, AMSC466, AMSC460, or CMSC460; or (must have knowledge of basic numerical analysis (linear equations, nonlinear equations, integration, interpolation); and permission of instructor).  Cross-listed with AMSC66 0.",
            "also_offered_as": null,
            "credit_granted_for": "AMSC660 or CMSC660."
        },
        "sections": [
            "CMSC660-0101"
        ]
    },
    {
        "course_id": "CMSC663",
        "semester": "202208",
        "name": "Advanced Scientific Computing I",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "In the sequence Advanced Scientific Computing I & Advanced Scientific Computing II, (AMSC663/CMSC663 and AMSC664/CMSC664, respectively) students work on a year-long individual project to develop software for a scientific task in a high performance computing environment. Lectures will be given on available computational environments, code development, implementation of parallel algorithms.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "AMSC660 or CMSC660; and (AMSC661 or CMSC661).",
            "formerly": null,
            "restrictions": "Permission of instructor.",
            "additional_info": "Cross-listed with AMSC663.",
            "also_offered_as": null,
            "credit_granted_for": "AMSC663 or CMSC663."
        },
        "sections": [
            "CMSC663-0101"
        ]
    },
    {
        "course_id": "CMSC666",
        "semester": "202208",
        "name": "Numerical Analysis I",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Approximation theory, numerical solution of initial-value problems, iterative methods for linear systems, optimization.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "CMSC466 or AMSC466; and MATH410.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Cross-listed with: AMSC666. Click here for more course information.",
            "also_offered_as": null,
            "credit_granted_for": "AMSC666 or CMSC666."
        },
        "sections": [
            "CMSC666-0101"
        ]
    },
    {
        "course_id": "CMSC673",
        "semester": "202208",
        "name": "Capstone in Machine Learning",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Semester-long project course in which each student will identify and carry out a project related to machine learning, with the goal of publishing a research paper or software tool.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C-in CMSC421 or CMSC422.",
            "formerly": "CMSC798P.",
            "restrictions": null,
            "additional_info": "Jointly offered with: CMSC473.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC673, CMSC798P, CMSC473, or CMSC498P."
        },
        "sections": [
            "CMSC673-0101"
        ]
    },
    {
        "course_id": "CMSC714",
        "semester": "202208",
        "name": "High Performance Computing Systems",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Slected topics in high-performance systems, including contemporary architectures, interconnection topologies, shared memory and message-passing systems, multi-threaded kernels, latency avoidance and hiding techniques, methods for data and workload partitioning performance profiling, debugging.",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "CMSC411 and CMSC412; or permission of instructor.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC714-0101"
        ]
    },
    {
        "course_id": "CMSC715",
        "semester": "202208",
        "name": "Wireless and Mobile Systems for the IoT",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Research on the Internet of Things (IoT), from the perspective of wireless networking and mobile sensing. Various techniques, algorithms, and systems that leverage the sensors in smartphones, smartwatches, drones, and IoT devices, to deliver real-world applications",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "CMSC417.",
            "formerly": "CMSC818W.",
            "restrictions": null,
            "additional_info": "Recommended: STAT100, MATH141, MATH240, and CMSC106; or equivalent courses.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC818W or CMSC715."
        },
        "sections": [
            "CMSC715-0101"
        ]
    },
    {
        "course_id": "CMSC723",
        "semester": "202208",
        "name": "Natural Language Processing",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Introduce fundamental concepts, techniques, and algorithms for the computational handling of natural language. Statistical and machine learning techniques, models, and algorithms that enable computers to deal with the ambiguity and implicit structure of human language. Approaches that focus on uncovering linguistic structure, such as syntactic or semantic parsing, as well as those that focus on manipulating text in useful ways, such as question answering or machine translation.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in CMSC422; and permission of CMNS-Computer Science department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "CMSC students may only receive PhD Comp.  Cross-listed with: INST735, LING723.   credit for CMSC723 or CMSC823, not both.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC723, LING723, or INST735."
        },
        "sections": [
            "CMSC723-0101"
        ]
    },
    {
        "course_id": "CMSC730",
        "semester": "202208",
        "name": "Interactive Technologies in Human-Computer Interaction",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Ubiquitous and mobile computing, wearables, virtual/augmented reality, natural user interfaces, tangible UIs, interactive fabrication.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": "CMSC838J.",
            "restrictions": "Must be in the Computer Science Master's or Doctoral program; or permission of instructor.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC838J or CMSC730."
        },
        "sections": [
            "CMSC730-0101"
        ]
    },
    {
        "course_id": "CMSC733",
        "semester": "202208",
        "name": "Computer Processing of Pictorial Information",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Input, output, and storage of pictorial information. Pictures as information sources, efficient encoding, sampling, quantization, approximation. Position-invariant operations on pictures, digital and optical implementations, the pax language, applications to matched and spatial frequency filtering. Picture quality, image enhancement and image restoration. Picture properties and pictorial pattern recognition. Processing of complex pictures; figure extraction, properties of figures. Data structures for pictures description and manipulation; picture languages. Graphics systems for alphanumeric and other symbols, line drawings of two- and three-dimensional objects, cartoons and movies.",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "CMSC420.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC733-0101"
        ]
    },
    {
        "course_id": "CMSC734",
        "semester": "202208",
        "name": "Information  Visualization",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Information visualization defined in relation to graphics, scientific visualization, databases, data mining, and human-computer interaction. Visualizations for dimensional, temporal, hierarchical and network data. Examines design alternatives, algorithms and data structures, coordinated views, and human factors evaluations of efficacy.",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "CMSC434; or students who have taken courses with comparable content may contact the department; or permission of instructor.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC734-0101"
        ]
    },
    {
        "course_id": "CMSC740",
        "semester": "202208",
        "name": "Advanced Computer Graphics",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "An introduction to the principles of computer graphics. Includes an introduction to graphics displays and systems, introduction to the mathematics of affine and projective transformations, perspective, curve and surface modeling, algorithms for hidden-surface removal, color models, methods for modeling illumination, shading, and reflection.",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH240 and CMSC420; or permission of instructor.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC740-0101"
        ]
    },
    {
        "course_id": "CMSC756",
        "semester": "202208",
        "name": "Robotics",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Overview on fundamental components of robotic systems, including the sensing and actuation, control and modeling of motion and perception, dynamics and kinematics, motion planning and manipulation of robots.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "CMSC420, CMSC106, CMSC466, and MATH240; or equivalent.",
            "formerly": "CMSC818N.",
            "restrictions": "Must be in the Computer Science Master's or Doctoral programs.",
            "additional_info": "Cross-listed with ENEE769M. Credit only granted for CMSC756 or ENEE769M.",
            "also_offered_as": null,
            "credit_granted_for": "CMSC818N or CMSC756."
        },
        "sections": [
            "CMSC756-0101"
        ]
    },
    {
        "course_id": "CMSC798",
        "semester": "202208",
        "name": "Master's Non-Thesis Research",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "CMSC799",
        "semester": "202208",
        "name": "Master's Thesis Research",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "CMSC801",
        "semester": "202208",
        "name": "Department Internal Research Seminar",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "Research overviews from faculty to help introduce departmental research to graduate students.",
        "grading_method": [
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": "CMSC798E.",
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "CMSC798E or CMSC801."
        },
        "sections": [
            "CMSC801-0101"
        ]
    },
    {
        "course_id": "CMSC818X",
        "semester": "202208",
        "name": "Advanced Topics in Computer Systems; Introduction to Parallel Computing",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "CMSC and AMSC students (MS or PhD). Introduction to parallel computing for computer science majors. Topics include programming for shared memory and distributed memory parallel architectures, and fundamental issues in design, development and analysis of parallel programs.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "CMSC411 and CMSC412 or permission of instructor.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC818X-0101"
        ]
    },
    {
        "course_id": "CMSC828C",
        "semester": "202208",
        "name": "Advanced Topics in Information Processing; Statistical Pattern Recognition",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC828C-0101"
        ]
    },
    {
        "course_id": "CMSC828J",
        "semester": "202208",
        "name": "Advanced Topics in Information Processing; Common-sense Reasoning and Natural Language Understanding",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC828J-0101"
        ]
    },
    {
        "course_id": "CMSC828R",
        "semester": "202208",
        "name": "Advanced Topics in Information Processing; Deep Learning for Audio-to-Audio Processing",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC828R-0101"
        ]
    },
    {
        "course_id": "CMSC828W",
        "semester": "202208",
        "name": "Advanced Topics in Information Processing; Foundations of Deep Learning",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Computer Science (Master's/Doctoral) students; or permission of instructor. In this course, we are going to explore empirically-relevant theoretical foundations of deep learning (DL). We will cover topics including DL optimization, DL generaliation, Neural Tangent Kernels, Deep Generative Models, DL Robustness, DL Interpretability, Domain Adaptation and Generalization, Self-Supervised Learning and Deep Reinforcement Learning.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC828W-0101"
        ]
    },
    {
        "course_id": "CMSC828X",
        "semester": "202208",
        "name": "Advanced Topics in Information Processing; Physically-based modeling, Simulation and Animation",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC828X-0101"
        ]
    },
    {
        "course_id": "CMSC829A",
        "semester": "202208",
        "name": "Advanced Topics in Bioinformatics and Computational Biology; Algorithmic Evolutionary Biology",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC829A-0101"
        ]
    },
    {
        "course_id": "CMSC838G",
        "semester": "202208",
        "name": "Advanced Topics in Programming Languages; Testing and Verification",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "This course will focus on establishing software correctness using advanced formal verification, random-testing, and fuzzing techniques. Knowledge of at least one functional programming language (e.g. OCaml, Haskell, or Coq) is strongly recommended.",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC838G-0101"
        ]
    },
    {
        "course_id": "CMSC838X",
        "semester": "202208",
        "name": "Advanced Topics in Programming Languages; Personal Health Informatics & Visualization",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "Jointly offered with INST682.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "INST682 or CMSC838 X."
        },
        "sections": [
            "CMSC838X-IM01"
        ]
    },
    {
        "course_id": "CMSC848B",
        "semester": "202208",
        "name": "Selected Topics in Information Processing; Computational Imaging",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC848B-0101"
        ]
    },
    {
        "course_id": "CMSC848C",
        "semester": "202208",
        "name": "Selected Topics in Information Processing; Human-AI Interaction",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC848C-0101"
        ]
    },
    {
        "course_id": "CMSC858F",
        "semester": "202208",
        "name": "Advanced Topics in Theory of Computing; Algorithmic Lower Bounds: Fun with Hardness Proofs",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC858F-0101"
        ]
    },
    {
        "course_id": "CMSC858O",
        "semester": "202208",
        "name": "Advanced Topics in Theory of Computing; The Foundation of End-to-End Quantum Applications",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "3",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "CMSC858O-0101"
        ]
    },
    {
        "course_id": "CMSC898",
        "semester": "202208",
        "name": "Pre-Candidacy Research",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "CMSC899",
        "semester": "202208",
        "name": "Doctoral Dissertation Research",
        "dept_id": "CMSC",
        "department": "Computer Science",
        "credits": "6",
        "description": "",
        "grading_method": [
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH003",
        "semester": "202208",
        "name": "Developmental Mathematics",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "A review of Intermediate High School Algebra intended for students preparing for one of the credit bearing Fundamental Studies Math Courses. It is taught in special computer labs using a self-paced computer program. The curriculum will be geared toward the student's level of algebra skills and eventual goals. There is a special fee for the course that may be applied in addition to the regular tuition charge. Students should refer to the schedule of classes for details on fees as they apply to a particular semester. The course does not carry any credit toward any degree at the University. The course is repeatable. Topics will be chosen from exponents, polynomials, linear equations, quadratic equations as well as polynomial, rational, exponential and logarithm functions and elementary probability or statistics, depending on the student.",
        "grading_method": [
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": "There is a special fee for this class in addition to the regular tuition charge.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH003-0102",
            "MATH003-0201",
            "MATH003-0601",
            "MATH003-0602",
            "MATH003-0701",
            "MATH003-0702",
            "MATH003-FC01",
            "MATH003-0202"
        ]
    },
    {
        "course_id": "MATH007",
        "semester": "202208",
        "name": "Algebra for MATH 107",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "A review of Intermediate High School Algebra intended for students preparing for MATH107. It is taught 5 days per week for the first 5 weeks, then leads directly into a special section of MATH107, the same semester, which also meets 5 days per week. Continuation in MATH107 is conditional on the student passing the MATHEMATICS PLACEMENT EXAM at the appropriate level. Topics include linear equations, linear inequalities, operations on polynomials, factoring, solutions of quadratic equations, as well as exponential and logarithm functions. MATH007 does not carry any credit toward any degree at the University, nor is it graded. It leads to either MATH107 or MATH003, both of which are graded.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH007-1101",
            "MATH007-1201"
        ]
    },
    {
        "course_id": "MATH013",
        "semester": "202208",
        "name": "Algebra for MATH 113",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "A review of Intermediate High School Algebra intended for students preparing for MATH113. It is taught 5 days per week for the first 5 weeks, then leads directly into a special section of MATH113, the same semester, which also meets 5 days per week. Continuation in MATH113 is conditional on the student passing the MATHEMATICS PLACEMENT EXAM at the appropriate level. Topics include exponents, polynomials, linear equations, quadratic equations, as well as polynomial, rational, exponential, and logarithm functions, and trigonometry. MATH013 does not carry any credit toward any degree at the University, nor is it graded. It leads directly to MATH113 (or MATH107), or MATH003, all of which are graded.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH013-1101",
            "MATH013-1201",
            "MATH013-1301",
            "MATH013-1401"
        ]
    },
    {
        "course_id": "MATH015",
        "semester": "202208",
        "name": "Algebra for MATH 115",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "A review of Intermediate High School Algebra intended for students preparing for MATH115. It is taught 5 days per week for the first 5 weeks, then leads directly into a special section of MATH115, the same semester, which also meets 5 days per week. Continuation in MATH115 is conditional on the student passing the MATHEMATICS PLACEMENT EXAM at the appropriate level. Topics include exponents, polynomials, linear equations in one and two variables, quadratic equations, as well as polynomial, rational, exponential, logarithm functions and trigonometry. MATH015 does not carry any credit toward any degree at the University, nor is it graded. It leads directly to MATH115 (or MATH107 or MATH113), or MATH003, all of which are graded.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH015-1101",
            "MATH015-1201",
            "MATH015-1301",
            "MATH015-1401"
        ]
    },
    {
        "course_id": "MATH107",
        "semester": "202208",
        "name": "Introduction to Math Modeling and Probability",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "A goal is to convey the power of mathematics as shown by a variety of problems which can be modeled and solved by quantitative means. Also included is an introduction to probability. Topics include data analysis, equations, systems of equations, inequalities, elementary linear programming, Venn diagrams, counting, basic probability, permutations, combinations, tree diagrams, standard normal and normal distributions. The mathematics of finance is covered. The course includes problem solving and decision making in economics, management, and social sciences.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [
            [
                "FSMA"
            ]
        ],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Must have math eligibility of Math 107 or higher; and math eligibility is based on Math Placement Exam or successful completion of MATH003 with appropriate eligibility.",
            "formerly": "Math 110 and Math 111.",
            "restrictions": "Not open to students majoring in mathematics, engineering, business, life sciences, and the physical sciences;; and must not have completed MATH120, MATH130, MATH136, or MATH140; and must not have completed MATH220; and must not have completed any MATH or STAT course with a prerequisite of MATH120, MATH130, MATH136, MATH140 or MATH220.",
            "additional_info": "Students who have credits for MATH107 may not also receive credit for STAT100, or MATH113.",
            "also_offered_as": null,
            "credit_granted_for": "STAT100, MATH107, or MATH113."
        },
        "sections": [
            "MATH107-0101",
            "MATH107-0201",
            "MATH107-0301",
            "MATH107-FC01",
            "MATH107-0401"
        ]
    },
    {
        "course_id": "MATH113",
        "semester": "202208",
        "name": "College Algebra and Trigonometry",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Topics include elementary functions including graphs and applications of: polynomial, rational, exponential, and logarithmic functions. Systems of equations and applications. Trigonometric functions: angle and radian measure, graphs and applications.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [
            [
                "FSMA"
            ]
        ],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Must have math eligibility of MATH113 or higher; and math eligibility is based on the Math Placement Exam or the successful completion of MATH 003 with appropriate eligibility.",
            "formerly": null,
            "restrictions": "Must not have completed MATH115, MATH120, MATH130, MATH136, or MATH140; and must not have completed any course with a prerequisite of MATH120, MATH130, MATH136, MATH140 or MATH220; and must not have completed MATH112 or MATH220.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "Students who have credits for MATH113 may not also receive credits for MATH107, MATH110, MATH112, or MATH115."
        },
        "sections": [
            "MATH113-0101",
            "MATH113-0102",
            "MATH113-0103",
            "MATH113-0104",
            "MATH113-0201",
            "MATH113-0202",
            "MATH113-0203",
            "MATH113-0204",
            "MATH113-0301",
            "MATH113-0302",
            "MATH113-0303",
            "MATH113-0401",
            "MATH113-0402",
            "MATH113-0403",
            "MATH113-FC01",
            "MATH113-FC02",
            "MATH113-FC03",
            "MATH113-FC04",
            "MATH113-0111",
            "MATH113-0112",
            "MATH113-0121",
            "MATH113-0122",
            "MATH113-0131",
            "MATH113-0132",
            "MATH113-0141",
            "MATH113-0142",
            "MATH113-0211",
            "MATH113-0212",
            "MATH113-0221",
            "MATH113-0222",
            "MATH113-0241",
            "MATH113-0231"
        ]
    },
    {
        "course_id": "MATH115",
        "semester": "202208",
        "name": "Precalculus",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Preparation for MATH120, MATH130 or MATH140. Elementary functions and graphs: polynomials, rational functions, exponential and logarithmic functions, trigonometric functions. Algebraic techniques preparatory for calculus.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [
            [
                "FSMA"
            ]
        ],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Must have math eligibility of MATH115 or higher; and math eligibility is based on the Math Placement Exam or the successful completion of MATH003 with appropriate eligibility.",
            "formerly": null,
            "restrictions": "Must not have completed MATH140; and must not have completed any MATH or STAT course with a prerequisite of MATH140.",
            "additional_info": "Or MATH113.  All sections will require the use of a TI graphics calculator. Instructor will use a TI-83 or a TI-83+,TI 84, TI 84+, TI 86, or TI 89 calculator.",
            "also_offered_as": null,
            "credit_granted_for": "Students who have credits for MATH115 may not also receive credits for MATH112 or MATH113."
        },
        "sections": [
            "MATH115-0121",
            "MATH115-0131",
            "MATH115-0141",
            "MATH115-0151",
            "MATH115-0161",
            "MATH115-0171",
            "MATH115-0181",
            "MATH115-0191",
            "MATH115-0192",
            "MATH115-FC02",
            "MATH115-FC03",
            "MATH115-FC04",
            "MATH115-FC05",
            "MATH115-FC06",
            "MATH115-FC07",
            "MATH115-FC08",
            "MATH115-0111",
            "MATH115-FC01"
        ]
    },
    {
        "course_id": "MATH120",
        "semester": "202208",
        "name": "Elementary Calculus I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Basic ideas of differential and integral calculus, with emphasis on elementary techniques of differentiation and applications.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [
            [
                "FSAR",
                "FSMA"
            ]
        ],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH113, MATH115).",
            "formerly": "MATH220.",
            "restrictions": "Not open to students majoring in mathematics, engineering, the biological sciences, biochemistry, chemistry, or the physical sciences.",
            "additional_info": "Or must have math eligibility of MATH120 or higher; and math eligibility is based on the Math Placement Test.  .",
            "also_offered_as": null,
            "credit_granted_for": "MATH120, MATH130, MATH136, or MATH140."
        },
        "sections": [
            "MATH120-FC01",
            "MATH120-FC02",
            "MATH120-FC03",
            "MATH120-FC04",
            "MATH120-0111",
            "MATH120-0121",
            "MATH120-0131",
            "MATH120-0141",
            "MATH120-0211",
            "MATH120-0231",
            "MATH120-0241",
            "MATH120-0251",
            "MATH120-0311",
            "MATH120-0331",
            "MATH120-0341",
            "MATH120-0411",
            "MATH120-0431",
            "MATH120-0441",
            "MATH120-0451",
            "MATH120-0351"
        ]
    },
    {
        "course_id": "MATH121",
        "semester": "202208",
        "name": "Elementary Calculus II",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Trigonometric functions, techniques of integration, infinite series, differential equations, probability.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH120, MATH130, MATH136, or MATH140.",
            "formerly": "MATH 221.",
            "restrictions": "Not open to students majoring in mathematics, engineering, the biological sciences, biochemistry, chemistry, or the physical sciences.",
            "additional_info": ".",
            "also_offered_as": null,
            "credit_granted_for": "MATH121, MATH131, or MATH141."
        },
        "sections": [
            "MATH121-0101",
            "MATH121-0201"
        ]
    },
    {
        "course_id": "MATH135",
        "semester": "202208",
        "name": "Discrete Mathematics for Life Sciences",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "Basic discrete mathematics, with emphasis on relevant models and techniques to the life sciences.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [
            [
                "FSAR",
                "FSMA"
            ]
        ],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH115; or must have math eligibility of MATH140 or higher; and math eligibility is based on the Math Placement Test.",
            "formerly": null,
            "restrictions": "Must be in the Biological Sciences or Neuroscience major; and not open to students majoring in mathematics, engineering, or the physical sciences.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH135-0111",
            "MATH135-0112",
            "MATH135-0121",
            "MATH135-0122",
            "MATH135-0131",
            "MATH135-0132",
            "MATH135-0141",
            "MATH135-0142",
            "MATH135-0212",
            "MATH135-0221",
            "MATH135-0222",
            "MATH135-0231",
            "MATH135-0232",
            "MATH135-0241",
            "MATH135-0242",
            "MATH135-0211"
        ]
    },
    {
        "course_id": "MATH136",
        "semester": "202208",
        "name": "Calculus for Life Sciences",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "Continuation of MATH135, including basic ideas of differential and integral calculus, with emphasis on elementary techniques and applications to the life sciences.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH135.",
            "formerly": null,
            "restrictions": "Must be in the Biological Sciences or Neuroscience major.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "MATH120, MATH130, MATH136, or MATH140."
        },
        "sections": [
            "MATH136-0111",
            "MATH136-0121",
            "MATH136-0131",
            "MATH136-0141"
        ]
    },
    {
        "course_id": "MATH140",
        "semester": "202208",
        "name": "Calculus I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "Introduction to calculus, including functions, limits, continuity, derivatives and applications of the derivative, sketching of graphs of functions, definite and indefinite integrals, and calculation of area. The course is especially recommended for science, engineering and mathematics majors.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [
            [
                "FSAR",
                "FSMA"
            ]
        ],
        "core": [
            "MS"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH115.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "All sections will require the use of a TI graphics calculator. Instructor will use a TI-83, TI-83+, TI 84, TI 84+, TI 86, or TI 89 calculator. Emphasis on student interaction in groups, including team approach to solving calculus based problems. There will be 3 one-hour lectures and 2 eighty-minute workshops each week with enhanced assistance and support for students.",
            "also_offered_as": null,
            "credit_granted_for": "MATH120, MATH130, MATH136, or MATH140."
        },
        "sections": [
            "MATH140-0111",
            "MATH140-0113",
            "MATH140-0121",
            "MATH140-0123",
            "MATH140-0131",
            "MATH140-0211",
            "MATH140-0213",
            "MATH140-0223",
            "MATH140-0231",
            "MATH140-0311",
            "MATH140-0313",
            "MATH140-0321",
            "MATH140-0323",
            "MATH140-0331",
            "MATH140-0411",
            "MATH140-0413",
            "MATH140-0421",
            "MATH140-0423",
            "MATH140-0431",
            "MATH140-0511",
            "MATH140-0513",
            "MATH140-0521",
            "MATH140-0523",
            "MATH140-0531",
            "MATH140-FC01",
            "MATH140-FC03",
            "MATH140-FC04",
            "MATH140-FC06",
            "MATH140-FC07",
            "MATH140-FC08",
            "MATH140-FC09",
            "MATH140-0221",
            "MATH140-FC02"
        ]
    },
    {
        "course_id": "MATH140H",
        "semester": "202208",
        "name": "Calculus I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "Introduction to calculus, including functions, limits, continuity, derivatives and applications of the derivative, sketching of graphs of functions, definite and indefinite integrals, and calculation of area. The course is especially recommended for science, engineering and mathematics majors.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [
            [
                "FSAR",
                "FSMA"
            ]
        ],
        "core": [
            "MS"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH115.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "For general honors students only. Offered fall only. All sections will require the use of a TI graphics calculator. Instructor will use a TI-83 TI-83+, TI 84, TI 84+, TI 86, or TI 89 calculator.",
            "also_offered_as": null,
            "credit_granted_for": "MATH120, MATH130, MATH136, or MATH140."
        },
        "sections": [
            "MATH140H-0101",
            "MATH140H-0201"
        ]
    },
    {
        "course_id": "MATH141",
        "semester": "202208",
        "name": "Calculus II",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "Continuation of MATH140, including techniques of integration, improper integrals, applications of integration (such as volumes, work, arc length, moments), inverse functions, exponential and logarithmic functions, sequences and series.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [
            "MS"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH140.",
            "formerly": null,
            "restrictions": null,
            "additional_info": ".All sections will require the use of a TI graphics calculator. Instructor will use a TI-83, TI-83+, TI 84, TI 84+, TI 86, or TI 89 calculator.",
            "also_offered_as": null,
            "credit_granted_for": "MATH121, MATH131, or MATH141."
        },
        "sections": [
            "MATH141-0111",
            "MATH141-0121",
            "MATH141-0131",
            "MATH141-0141",
            "MATH141-0211",
            "MATH141-0221",
            "MATH141-0231",
            "MATH141-0251",
            "MATH141-0311",
            "MATH141-0321",
            "MATH141-0341",
            "MATH141-FC03",
            "MATH141-0331",
            "MATH141-FC01",
            "MATH141-FC02"
        ]
    },
    {
        "course_id": "MATH141H",
        "semester": "202208",
        "name": "Calculus II",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "Continuation of MATH140, including techniques of integration, improper integrals, applications of integration (such as volumes, work, arc length, moments), inverse functions, exponential and logarithmic functions, sequences and series.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [
            "MS"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH140.",
            "formerly": null,
            "restrictions": null,
            "additional_info": ".For general honors students only. TI graphics calculator required. Instructor will use a TI-83, TI-83+, TI 84, TI 84+, TI 86, or TI 89 calculator.",
            "also_offered_as": null,
            "credit_granted_for": "MATH121, MATH131, or MATH141."
        },
        "sections": [
            "MATH141H-0101",
            "MATH141H-0201"
        ]
    },
    {
        "course_id": "MATH206",
        "semester": "202208",
        "name": "Introduction to Matlab",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "This course is intended to prepare students for subsequent courses requiring computation with MATLAB. Covers basics of MATLAB including simple commands, variables, solving equations, graphing differentiation and integration, matrices and vectors, functions, M-files and fundamentals of programming in the MATLAB environment. When offered in Winter and Summer terms, the course is offered in a format suitable for online distance learning.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH136, MATH140).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH206-0101"
        ]
    },
    {
        "course_id": "MATH212",
        "semester": "202208",
        "name": "Elements of Numbers and Operations",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Reviews and extends topics of arithmetic and number theory related to the elementary school curriculum, particularly number systems and operations with natural numbers, integers, and rationals.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Must have completed one year of college preparatory algebra.",
            "formerly": null,
            "restrictions": "Must be in one of the following programs (Early Childhood Education; Special Education; Elementary Education).",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH212-0101",
            "MATH212-0401"
        ]
    },
    {
        "course_id": "MATH213",
        "semester": "202208",
        "name": "Elements of Geometry and Measurement",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Properties of geometric objects in two and three dimensions; parallel lines, curves and polygons; ratio, proportion, similarity; transformational geometry and measurement, constructions, justifications and proofs.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH212.",
            "formerly": null,
            "restrictions": "Must be in one of the following programs (Early Childhood Education; Special Education; Elementary Education).",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH213-0101",
            "MATH213-0201"
        ]
    },
    {
        "course_id": "MATH214",
        "semester": "202208",
        "name": "Elements of Probability and Statistics",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Permutations and combinations; probability; collecting and representing data; using statistics to analyze and interpret data.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH212.",
            "formerly": null,
            "restrictions": "Must be in one of the following programs (Early Childhood Education; Special Education; Elementary Education).",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH214-0201"
        ]
    },
    {
        "course_id": "MATH240",
        "semester": "202208",
        "name": "Introduction to Linear Algebra",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "Basic concepts of linear algebra: vector spaces, applications to line and plane geometry, linear equations and matrices, similar matrices, linear transformations, eigenvalues, determinants and quadratic forms.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH131, MATH141).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "MATH240, MATH341, or MATH461."
        },
        "sections": [
            "MATH240-0111",
            "MATH240-0121",
            "MATH240-0131",
            "MATH240-0141",
            "MATH240-0211",
            "MATH240-0221",
            "MATH240-0231",
            "MATH240-0241",
            "MATH240-0311",
            "MATH240-0321",
            "MATH240-0331",
            "MATH240-0341"
        ]
    },
    {
        "course_id": "MATH241",
        "semester": "202208",
        "name": "Calculus III",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "Introduction to multivariable calculus, including vectors and vector-valued functions, partial derivatives and applications of partial derivatives (such as tangent planes and Lagrange multipliers), multiple integrals, volume, surface area, and the classical theorems of Green, Stokes and Gauss.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH141.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "All sections will use MATLAB.",
            "also_offered_as": null,
            "credit_granted_for": "MATH241 or MATH340."
        },
        "sections": [
            "MATH241-0341",
            "MATH241-0411",
            "MATH241-0421",
            "MATH241-0431",
            "MATH241-0441",
            "MATH241-0511",
            "MATH241-0521",
            "MATH241-0531",
            "MATH241-0541",
            "MATH241-0111",
            "MATH241-0121",
            "MATH241-0131",
            "MATH241-0141",
            "MATH241-0211",
            "MATH241-0221",
            "MATH241-0241",
            "MATH241-0311",
            "MATH241-0321",
            "MATH241-0331",
            "MATH241-0231"
        ]
    },
    {
        "course_id": "MATH241H",
        "semester": "202208",
        "name": "Calculus III",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "Introduction to multivariable calculus, including vectors and vector-valued functions, partial derivatives and applications of partial derivatives (such as tangent planes and Lagrange multipliers), multiple integrals, volume, surface area, and the classical theorems of Green, Stokes and Gauss.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH141.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "For general honors students only. MATH241H will use MATLAB.",
            "also_offered_as": null,
            "credit_granted_for": "MATH241 or MATH340."
        },
        "sections": [
            "MATH241H-0101",
            "MATH241H-0201",
            "MATH241H-0301",
            "MATH241H-0401"
        ]
    },
    {
        "course_id": "MATH246",
        "semester": "202208",
        "name": "Differential Equations for Scientists and Engineers",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "An introduction to the basic methods of solving ordinary differential equations. Equations of first and second order, linear differential equations, Laplace transforms, numerical methods and the qualitative theory of differential equations.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH141.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "All sections will use MATLAB.",
            "also_offered_as": null,
            "credit_granted_for": "MATH246 or MATH341."
        },
        "sections": [
            "MATH246-0111",
            "MATH246-0131",
            "MATH246-0141",
            "MATH246-0211",
            "MATH246-0221",
            "MATH246-0231",
            "MATH246-0241",
            "MATH246-0411",
            "MATH246-0421",
            "MATH246-0431",
            "MATH246-0441",
            "MATH246-0501",
            "MATH246-0121"
        ]
    },
    {
        "course_id": "MATH246H",
        "semester": "202208",
        "name": "Differential Equations for Scientists and Engineers",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "An introduction to the basic methods of solving ordinary differential equations. Equations of first and second order, linear differential equations, Laplace transforms, numerical methods and the qualitative theory of differential equations.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH141.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "For general honors students only. MATH241H will use MATLAB.",
            "also_offered_as": null,
            "credit_granted_for": "MATH246 or MATH341."
        },
        "sections": [
            "MATH246H-0101"
        ]
    },
    {
        "course_id": "MATH274",
        "semester": "202208",
        "name": "History of Mathematics",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "An overview of aspects in the history of mathematics from its beginning in the concrete problem solving of ancient times through the development of abstraction in the 19th and 20th centuries. The course considers both mathematical ideas and the context in which they developed in various civilizations around the world.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [
            "I"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH120, MATH130, MATH136, or MATH140; or must have completed MATH220.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH274-0101"
        ]
    },
    {
        "course_id": "MATH299B",
        "semester": "202208",
        "name": "Selected Topics in Mathematics; Putnam Express",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH299B-0101"
        ]
    },
    {
        "course_id": "MATH310",
        "semester": "202208",
        "name": "Introduction to Mathematical Proof",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "To develop the students' ability to construct a rigorous proof of a mathematical claim. Students will also be made aware of mathematical results that are of interest to those wishing to analyze a particular mathematical model. Topics will be drawn from logic, set theory, structure of the number line, elementary topology, metric spaces, functions, sequences and continuity.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH141; and must have completed or be concurrently enrolled in MATH240, MATH341, or MATH461; and must have completed or be concurrently enrolled in MATH241 or MATH340.",
            "formerly": null,
            "restrictions": "Must be in a major within the CMNS-Mathematics department; or permission of the CMNS-Mathematics department.",
            "additional_info": "Math majors may not use this course to satisfy an upper-level requirement.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH310-0401",
            "MATH310-0101",
            "MATH310-0201",
            "MATH310-0301"
        ]
    },
    {
        "course_id": "MATH314",
        "semester": "202208",
        "name": "Introduction to Probability, Data, Analysis and Statistics for Preservice Middle School Teachers",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Analysis of bivariate data, probability and randomness, law of large numbers, central limit theorem, probabilities for independent and dependent events, counting techniques, random variables and probability distributions, expected values, sampling distributions, and confidence intervals.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH214.",
            "formerly": null,
            "restrictions": "Must be in one of the following programs (Elementary Education; Special Education; Middle School Education).",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "MATH314 or STAT100."
        },
        "sections": [
            "MATH314-0101"
        ]
    },
    {
        "course_id": "MATH315",
        "semester": "202208",
        "name": "Algebra for Preservice Middle School Teachers",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Algebraic concepts and techniques developed in the middle grades, with their larger mathematical context. Equations, inequalities and functions (linear, polynomial, exponential, logarithmic), with multiple representations of relationships. Common misconceptions of beginning algebra students.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH212.",
            "formerly": null,
            "restrictions": "Must be in one of the following programs (Elementary Education; Special Education; Middle School Education).",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "MATH113 or MATH315."
        },
        "sections": [
            "MATH315-0101"
        ]
    },
    {
        "course_id": "MATH340",
        "semester": "202208",
        "name": "Multivariable Calculus, Linear Algebra and Differential Equations I (Honors)",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "4",
        "description": "First semester of the MATH340-341 sequence which gives a unified and enriched treatment of multivariable calculus, linear algebra and ordinary differential equations, with supplementary material from subjects such as differential geometry, Fourier series and calculus of variations. Students completing MATH340-341 will have covered the material of MATH240, MATH241, and MATH246, and may not also receive credit for MATH240, MATH241 or MATH246.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH141 and MATH140; and permission of CMNS-Mathematics department; and permission will be granted only to incoming freshmen.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "MATH241 or MATH340."
        },
        "sections": [
            "MATH340-0101",
            "MATH340-0201"
        ]
    },
    {
        "course_id": "MATH386",
        "semester": "202208",
        "name": "Experiential Learning",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Prerequisite: Must have learning proposal approved by the CMNS Mathematics Department.",
        "grading_method": [
            "Regular",
            "Pass-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH401",
        "semester": "202208",
        "name": "Applications of Linear Algebra",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Various applications of linear algebra: theory of finite games, linear programming, matrix methods as applied to finite Markov chains, random walk, incidence matrices, graphs and directed graphs, networks and transportation problems.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH461, MATH240, MATH341).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH401-0401",
            "MATH401-0301",
            "MATH401-0501",
            "MATH401-0601",
            "MATH401-0101",
            "MATH401-0201"
        ]
    },
    {
        "course_id": "MATH402",
        "semester": "202208",
        "name": "Algebraic Structures",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "For students having only limited experience with rigorous mathematical proofs. Parallels MATH403. Students planning graduate work in mathematics should take MATH403. Groups, rings, integral domains and fields, detailed study of several groups; properties of integers and polynomials. Emphasis is on the origin of the mathematical ideas studied and the logical structure of the subject.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH341, MATH461).",
            "formerly": null,
            "restrictions": "Must not be in any of the following programs (Mathematics (Master's); Mathematics (Doctoral)).",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "MATH402 or MATH403."
        },
        "sections": [
            "MATH402-0101"
        ]
    },
    {
        "course_id": "MATH403",
        "semester": "202208",
        "name": "Introduction to Abstract Algebra",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Integers; groups, rings, integral domains, fields.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH461, MATH340); and 1 course with a minimum grade of C- from (MATH341, MATH241); and minimum grade of C- in MATH310.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or students who have taken courses with comparable content may contact the department.",
            "also_offered_as": null,
            "credit_granted_for": "MATH402 or MATH403."
        },
        "sections": [
            "MATH403-0101",
            "MATH403-0201"
        ]
    },
    {
        "course_id": "MATH405",
        "semester": "202208",
        "name": "Linear Algebra",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "An abstract treatment of finite dimensional vector spaces. Linear transformations and their invariants.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH461, MATH341); and minimum grade of C- in MATH310.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH405-0101",
            "MATH405-0201"
        ]
    },
    {
        "course_id": "MATH406",
        "semester": "202208",
        "name": "Introduction to Number Theory",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Integers, divisibility, prime numbers, unique factorization, congruences, quadratic reciprocity, Diophantine equations and arithmetic functions.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH241, MATH246, MATH340, MATH341, MATH461); or permission of CMNS-Mathematics department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH406-0101",
            "MATH406-0201",
            "MATH406-0301"
        ]
    },
    {
        "course_id": "MATH410",
        "semester": "202208",
        "name": "Advanced Calculus I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Subjects covered: sequences and series of numbers, continuity and differentiability of real-valued functions of one variable, the Riemann integral, sequences of functions and power series.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH461, MATH341); and 1 course with a minimum grade of C- from (MATH340, MATH241); and minimum grade of C- in MATH310.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH410-0101",
            "MATH410-0201",
            "MATH410-0301",
            "MATH410-0501",
            "MATH410-0601",
            "MATH410-0401"
        ]
    },
    {
        "course_id": "MATH411",
        "semester": "202208",
        "name": "Advanced Calculus II",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Continuation of MATH410. Topics include:  The topology of sets in R^n, the derivative matrix, the general chain rule, inverse and implicit function theorems with applications, smooth curves and surfaces in R^3, Lagrange multipliers.  Additional topics may include:  Metric spaces, the contraction principle, the existence and uniqueness theorem for nonlinear first order differential equations, the Riemann integral of R^n, introduction to integration on curves and surfaces, Green's theorem.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH410; and permission of CMNS-Mathematics department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH411-0101",
            "MATH411-0201"
        ]
    },
    {
        "course_id": "MATH416",
        "semester": "202208",
        "name": "Applied Harmonic Analysis: An Introduction to Signal Processing",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Introduces students to the mathematical concepts arising in signal analysis from the applied harmonic analysis point of view. Topics include applied linear algebra, Fourier series, discrete Fourier transform, Fourier transform, Shannon Sampling Theorem, wavelet bases, multiresolution analysis, and discrete wavelet transform.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH141; and 1 course with a minimum grade of C- from (MATH240, MATH461, MATH341); and familiarity with MATLAB is required.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH416-0101"
        ]
    },
    {
        "course_id": "MATH424",
        "semester": "202208",
        "name": "Introduction to the Mathematics of Finance",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Introduction to the mathematical models used in finance and economics with emphasis on pricing derivative instruments. Designed for students in mathematics, computer science, engineering, finance and physics. Financial markets and instruments; elements from basic probability theory; interest rates and present value analysis; normal distribution of stock returns; option pricing; arbitrage pricing theory; the multiperiod binomial model; the Black-Scholes option pricing formula; proof of the Black-Scholes option pricing formula and applications; trading and hedging of options; Delta hedging; utility functions and portfolio theory; elementary stochastic calculus; Ito's Lemma; the Black-Scholes equation and its conversion to the heat equation.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH141; and 1 course with a minimum grade of C- from (STAT400, STAT410); and permission of CMNS-Mathematics department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Recommended: MATH246, MATH240, MATH241, MATH340, or MATH341.",
            "also_offered_as": null,
            "credit_granted_for": "BMGT444, MATH424."
        },
        "sections": [
            "MATH424-0101"
        ]
    },
    {
        "course_id": "MATH430",
        "semester": "202208",
        "name": "Euclidean and Non-Euclidean Geometries",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Hilbert's axioms for Euclidean geometry. Neutral geometry: the consistency of the hyperbolic parallel postulate and the inconsistency of the elliptic parallel postulate with neutral geometry. Models of hyperbolic geometry. Existence and properties of isometries.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH341, MATH461).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH430-0101"
        ]
    },
    {
        "course_id": "MATH431",
        "semester": "202208",
        "name": "Geometry for Computer Applications",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Topics from projective geometry and transformation geometry, emphasizing the two-dimensional representation of three-dimensional objects and objects moving about in the  plane and space.  The emphasis will be on formulas and algorithms of immediate use in computer graphics.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH461, MATH240, MATH341).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH431-0101"
        ]
    },
    {
        "course_id": "MATH432",
        "semester": "202208",
        "name": "Introduction to Topology",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Metric spaces, topological spaces, connectedness, compactness (including Heine-Borel and Bolzano-Weierstrass theorems), Cantor sets, continuous maps and homeomorphisms, fundamental group (homotopy, covering spaces, the fundamental theorem of algebra, Brouwer fixed point theorem), surfaces (e.g., Euler characteristic, the index of a vector field, hairy sphere theorem), elements of combinatorial topology (graphs and trees, planarity, coloring problems).",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH410.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH432-0101"
        ]
    },
    {
        "course_id": "MATH436",
        "semester": "202208",
        "name": "Differential Geometry of Curves and Surfaces I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Curves in the plane and Euclidean space, moving frames, surfaces in Euclidean space, orientability of surfaces; Gaussian and mean curvatures; surfaces of revolution, ruled surfaces, minimal surfaces, special curves on surfaces, \"Theorema Egregium\"; the intrinsic geometry of surfaces.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH241, MATH340); and 1 course with a minimum grade of C- from (MATH461, MATH240, MATH341); and must have completed two 400-level MATH courses with a minimum grade of C- (not including MATH461, and 480's).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH436-0101"
        ]
    },
    {
        "course_id": "MATH445",
        "semester": "202208",
        "name": "Elementary Mathematical Logic",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Elementary development of propositional and predicate logic, including semantics and deductive systems and with a discussion of completeness, incompleteness and the decision problem.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH141.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH445-0101"
        ]
    },
    {
        "course_id": "MATH452",
        "semester": "202208",
        "name": "Introduction to Dynamics and Chaos",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "An introduction to mathematical dynamics and chaos. Orbits, bifurcations, Cantor sets and horseshoes, symbolic dynamics, fractal dimension, notions of stability, flows and chaos. Includes motivation and historical perspectives, as well as examples of fundamental maps studied in dynamics and applications of dynamics.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH341; or MATH246 and one of (MATH240 or MATH461).",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Cross-listed with: AMSC452.",
            "also_offered_as": null,
            "credit_granted_for": "AMSC452 or MATH452."
        },
        "sections": [
            "MATH452-0101"
        ]
    },
    {
        "course_id": "MATH456",
        "semester": "202208",
        "name": "Cryptography",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "The theory, application, and implementation of mathematical techniques used to secure modern communications. Topics include symmetric and public-key encryption, message integrity, hash functions, block-cipher design and analysis, number theory, and digital signatures.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "(CMSC106, CMSC131, or ENEE150; or equivalent programming experience); and (2 courses from (CMSC330, CMSC351, ENEE324, or ENEE380); or any one of these courses and a 400-level MATH course, or two 400-level MATH courses).",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Or permission of instructor.",
            "also_offered_as": "CMSC456, ENEE456.",
            "credit_granted_for": "MATH456, CMSC456 or ENEE456."
        },
        "sections": [
            "MATH456-0101",
            "MATH456-0201"
        ]
    },
    {
        "course_id": "MATH461",
        "semester": "202208",
        "name": "Linear Algebra for Scientists and Engineers",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Basic concepts of linear algebra. This course is similar to MATH 240, but with more extensive coverage of the topics needed in applied linear algebra: change of basis, complex eigenvalues, diagonalization, the Jordan canonical form.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH141; and must have completed a MATH or STAT course with a prerequisite of MATH141.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "This course may not be used towards the upper level math requirements for MATH/STAT majors.",
            "also_offered_as": null,
            "credit_granted_for": "MATH240, MATH341, or MATH461."
        },
        "sections": [
            "MATH461-0111",
            "MATH461-0112",
            "MATH461-0121",
            "MATH461-0122",
            "MATH461-0132",
            "MATH461-0211",
            "MATH461-0131"
        ]
    },
    {
        "course_id": "MATH462",
        "semester": "202208",
        "name": "Partial Differential Equations",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Linear spaces and operators, orthogonality, Sturm-Liouville problems and eigenfunction expansions for ordinary differential equations. Introduction to partial differential equations, including the heat equation, wave equation and Laplace's equation. Boundary value problems, initial value problems and initial-boundary value problems.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH241, MATH340); and 1 course with a minimum grade of C- from (MATH246, MATH341).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH462-0101"
        ]
    },
    {
        "course_id": "MATH463",
        "semester": "202208",
        "name": "Complex Variables",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "The algebra of complex numbers, analytic functions, mapping properties of the elementary functions. Cauchy integral formula. Theory of residues and application to evaluation of integrals. Conformal mapping.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH241, MATH340).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH463-0101",
            "MATH463-0201"
        ]
    },
    {
        "course_id": "MATH464",
        "semester": "202208",
        "name": "Transform Methods",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Fourier transform, Fourier series, discrete fast Fourier transform (DFT and FFT). Laplace transform. Poisson summations, and sampling. Optional Topics: Distributions and operational calculus, PDEs, Wavelet transform, Radon transform and applications such as Imaging, Speech Processing, PDEs of Mathematical Physics, Communications, Inverse Problems.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH246, MATH341).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH464-0101"
        ]
    },
    {
        "course_id": "MATH475",
        "semester": "202208",
        "name": "Combinatorics and Graph Theory",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "General enumeration methods, difference equations, generating functions. Elements of graph theory, matrix representations of graphs, applications of graph theory to transport networks, matching theory and graphical algorithms.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH341, MATH461); and 1 course with a minimum grade of C- from (MATH241, MATH340); and permission of CMNS-Mathematics department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Cross-listed with CMSC475.",
            "also_offered_as": null,
            "credit_granted_for": "MATH475 or CMSC475."
        },
        "sections": [
            "MATH475-0101"
        ]
    },
    {
        "course_id": "MATH489",
        "semester": "202208",
        "name": "Research Interactions in Mathematics; Research Interactions in Mathematics",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH498A",
        "semester": "202208",
        "name": "Selected Topics in Mathematics",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH600",
        "semester": "202208",
        "name": "Abstract Algebra I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Groups with operators, homomorphism and isomorphism theorems, normal series, Sylow theorems, free groups, Abelian groups, rings, integral domains, fields, modules. Topics may include HOM (A,B), Tensor products, exterior algebra.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH405 and MATH403; or students who have taken courses with comparable content may contact the department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Offered fall only.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH600-0101"
        ]
    },
    {
        "course_id": "MATH606",
        "semester": "202208",
        "name": "Algebraic Geometry I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Prime and primary ideals in Noetherian rings, Hilbert Nullstellensatz, places and valuations, prevarieties (in the sense of Serre), dimension, morphisms, singularities, varieties, schemes, rationality.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH600 and MATH601.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH606-0101"
        ]
    },
    {
        "course_id": "MATH630",
        "semester": "202208",
        "name": "Real Analysis I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Lebesgue measure and the Lebesgue integral on R, differentiation of functions of bounded variation, absolute continuity and fundamental theorem of calculus, Lp spaces on R, Riesz-Fischer theorem, bounded linear functionals on Lp, measure and outer measure, Fubini's theorem.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH411; or students who have taken courses with comparable content may contact the department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH630-0101"
        ]
    },
    {
        "course_id": "MATH632",
        "semester": "202208",
        "name": "Functional Analysis",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Introduction to functional analysis and operator theory: normed linear spaces, basic principles of functional analysis, bounded linear operators on Hilbert spaces, spectral theory of selfadjoint operators, applications to differential and integral equations, additional topics as time permits.",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH631.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH632-0101"
        ]
    },
    {
        "course_id": "MATH642",
        "semester": "202208",
        "name": "Dynamical Systems I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Foundations of topological dynamics, homeomorphisms, flows, periodic and recurrent points, transitivity and minimality, symbolic dynamics. Elements of ergodic theory, invariant measures and sets, ergodicity, ergodic theorems, mixing, spectral theory, flows and sections. Applications of dynamical systems to number theory, the Weyl theorem, the distribution of values of polynomials, Vander Waerden's theorem on arithmetic progressions.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH432.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "And MATH630; or students who have taken courses with comparable content may contact the department.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH642-0101"
        ]
    },
    {
        "course_id": "MATH669",
        "semester": "202208",
        "name": "Selected Topics in Riemann Surfaces",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH669-0101"
        ]
    },
    {
        "course_id": "MATH673",
        "semester": "202208",
        "name": "Partial Differential Equations I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Analysis of boundary value problems for Laplace's equation, initial value problems for the heat and wave equations. Fundamental solutions, maximum principles, energy methods. First order nonlinear PDE, conservation laws. Characteristics, shock formation, weak solutions. Distributions, Fourier transform.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH411; or students who have taken courses with comparable content may contact the department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Cross-listed with AMSC67 3.  Offered fall only.",
            "also_offered_as": null,
            "credit_granted_for": "AMSC673 or MATH673."
        },
        "sections": [
            "MATH673-0101"
        ]
    },
    {
        "course_id": "MATH689",
        "semester": "202208",
        "name": "Research Interactions in Mathematics",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH695",
        "semester": "202208",
        "name": "Teaching Seminar",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "A course intended for first year teaching assistants. Topics include: everyday mechanics of teaching; teaching methods and styles; technology; course enrichment, diversity in the classroom; sexual harassment; teacher-student interactions; presentations by students.",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": "Must be in one of the following programs (Mathematics (Doctoral); Mathematics (Master's); Mathematical Statistics (Doctoral); Applied Mathematics and Scientific Computation (Master's); Mathematical Statistics (Master's); Applied Mathematics and Scientific Computation (Doctoral)).",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH695-0101"
        ]
    },
    {
        "course_id": "MATH712",
        "semester": "202208",
        "name": "Mathematical Logic I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Sentential logic, first-order languages, models and formal deductions. Basic model theory including completeness and compactness theorems, other methods of constructing models, and applications such as non-standard analysis.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH712-0101"
        ]
    },
    {
        "course_id": "MATH730",
        "semester": "202208",
        "name": "Fundamental Concepts of Topology",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Survey of basic point set topology, fundamental group, covering spaces, Van Kampen's theorem, simplicial complexes, simplicial homology, Euler characteristics and classification of surfaces.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH403, MATH410, and MATH411; or students who have taken courses with comparable content may contact the department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH730-0101"
        ]
    },
    {
        "course_id": "MATH742",
        "semester": "202208",
        "name": "Geometric Analysis",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "Calculus of Variations, Bochner technique, Morse theory, weak solutions and elliptic regularity, maximum principle for elliptic and parabolic equations, Green's function of the Laplacian, isoperimetric and Sobolev inequalities, continuity method, curvature and comparison results, harmonic maps, curvature prescription problems.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH673 and MATH674; or MATH740.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH742-0101"
        ]
    },
    {
        "course_id": "MATH744",
        "semester": "202208",
        "name": "Lie Groups I",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "3",
        "description": "An introduction to the fundamentals of Lie groups, including some material on groups of matrices and Lie algebras.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH405, MATH403, MATH411, and MATH432; or students who have taken courses with comparable content may contact the department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH744-0101"
        ]
    },
    {
        "course_id": "MATH799",
        "semester": "202208",
        "name": "Master's Thesis Research",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH808A",
        "semester": "202208",
        "name": "Selected Topics in Algebra",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH808N",
        "semester": "202208",
        "name": "Selected Topics in Algebra; Canonical Models of Shimura Varieties",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH808N-0101"
        ]
    },
    {
        "course_id": "MATH808T",
        "semester": "202208",
        "name": "Selected Topics in Algebra; Introduction to the geometric Langlands program",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH808T-0101"
        ]
    },
    {
        "course_id": "MATH818A",
        "semester": "202208",
        "name": "Selected Topics in Logic",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH818D",
        "semester": "202208",
        "name": "Selected Topics in Logic; Descriptive Set Theory and Polish Group",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH818D-0101"
        ]
    },
    {
        "course_id": "MATH848A",
        "semester": "202208",
        "name": "Selected Topics in Geometry and Topology",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH848V",
        "semester": "202208",
        "name": "Selected Topics in Geometry and Topology; Topics in Geometric Analysis",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH848V-0101"
        ]
    },
    {
        "course_id": "MATH858A",
        "semester": "202208",
        "name": "Selected Topics in Analysis",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH858K",
        "semester": "202208",
        "name": "Selected Topics in Analysis; Harmonic Analysis and Ergodic Theory",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH858K-0101"
        ]
    },
    {
        "course_id": "MATH858L",
        "semester": "202208",
        "name": "Selected Topics in Analysis; Mathmatical Methods in Machine Learning",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit",
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "MATH858L-0101"
        ]
    },
    {
        "course_id": "MATH868A",
        "semester": "202208",
        "name": "SelectedTopics in Complex Analysis",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH898",
        "semester": "202208",
        "name": "Pre-Candidacy Research",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "MATH899",
        "semester": "202208",
        "name": "Doctoral Dissertation Research",
        "dept_id": "MATH",
        "department": "Mathematics",
        "credits": "6",
        "description": "",
        "grading_method": [
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "STAT100",
        "semester": "202208",
        "name": "Elementary Statistics and Probability",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Simplest tests of statistical hypotheses; applications to before-and-after and matched pair studies. Events, probability, combinations, independence. Binomial probabilities, confidence limits. Random variables, expected values, median, variance. Tests based on ranks. Law of large numbers, normal approximation. Estimates of mean and variance.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [
            [
                "FSAR",
                "FSMA"
            ]
        ],
        "core": [
            "MS"
        ],
        "relationships": {
            "coreqs": null,
            "prereqs": "MATH110, MATH112, MATH113, or MATH115; or permission of CMNS-Mathematics department; or must have math eligibility of STAT100 or higher and math eligibility is based on the Math Placement Exam or the successful completion of Math 003 with appropriate eligibility.",
            "formerly": null,
            "restrictions": "Must not have completed MATH111; or must not have completed any MATH or STAT course with a prerequisite of MATH141.",
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "STAT100, MATH107 or MATH111."
        },
        "sections": [
            "STAT100-0111",
            "STAT100-0121",
            "STAT100-0123",
            "STAT100-0131",
            "STAT100-0141",
            "STAT100-0211",
            "STAT100-0223",
            "STAT100-0241",
            "STAT100-0311",
            "STAT100-0321",
            "STAT100-0331",
            "STAT100-0333",
            "STAT100-FC01",
            "STAT100-FC02",
            "STAT100-0221",
            "STAT100-0231"
        ]
    },
    {
        "course_id": "STAT386",
        "semester": "202208",
        "name": "Experiential Learning",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Prerequisite: Must have learning proposal approved by the CMNS-Mathematics Department.",
        "grading_method": [
            "Regular",
            "Pass-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "STAT386-2801",
            "STAT386-3903",
            "STAT386-5001"
        ]
    },
    {
        "course_id": "STAT400",
        "semester": "202208",
        "name": "Applied Probability and Statistics I",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Random variables, standard distributions, moments, law of large numbers and central limit theorem. Sampling methods, estimation of parameters, testing of hypotheses.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH131, MATH141); or students who have taken courses with comparable content may contact the department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Not acceptable toward graduate degrees in MATH/STAT/AMSC.",
            "also_offered_as": null,
            "credit_granted_for": "BMGT231, ENEE324, or STAT400."
        },
        "sections": [
            "STAT400-0111",
            "STAT400-0112",
            "STAT400-0121",
            "STAT400-0122",
            "STAT400-0131",
            "STAT400-0132",
            "STAT400-0211",
            "STAT400-0212",
            "STAT400-0311",
            "STAT400-0312",
            "STAT400-0321",
            "STAT400-0322",
            "STAT400-0331",
            "STAT400-0332",
            "STAT400-0221",
            "STAT400-0222",
            "STAT400-0231",
            "STAT400-0232"
        ]
    },
    {
        "course_id": "STAT401",
        "semester": "202208",
        "name": "Applied Probability and Statistics II",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Point estimation - unbiased and consistent estimators. Interval estimation. Minimum variance and maximum likelihood estimators. Testing of hypotheses. Regression, correlation and analysis of variance. Sampling distributions. Elements of non-parametric methods.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (STAT400, STAT410).",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Not acceptable toward graduate degrees in MATH/STAT/AMSC.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "STAT401-0501",
            "STAT401-0112",
            "STAT401-0201",
            "STAT401-0301",
            "STAT401-0401",
            "STAT401-0111"
        ]
    },
    {
        "course_id": "STAT410",
        "semester": "202208",
        "name": "Introduction to Probability Theory",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Probability and its properties. Random variables and distribution functions in one and several dimensions. Moments. Characteristic functions. Limit theorems.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH461, MATH341); and 1 course with a minimum grade of C- from (MATH340, MATH241).",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Cross-listed with SURV410.  Credit only granted  for: STAT410 or SURV410.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "STAT410-0101",
            "STAT410-0201",
            "STAT410-0301",
            "STAT410-0401",
            "STAT410-0501",
            "STAT410-0601"
        ]
    },
    {
        "course_id": "STAT420",
        "semester": "202208",
        "name": "Theory and Methods of Statistics",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Point estimation, sufficiency, completeness, Cramer-Rao inequality, maximum likelihood. Confidence intervals for parameters of normal distribution. Hypothesis testing, most powerful tests, likelihood ratio tests. Chi-square tests, analysis of variance, regression, correlation. Nonparametric methods.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (SURV410, STAT410).",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Cross-listed with SURV420.",
            "also_offered_as": null,
            "credit_granted_for": "STAT420  or SURV420."
        },
        "sections": [
            "STAT420-0101",
            "STAT420-0201"
        ]
    },
    {
        "course_id": "STAT426",
        "semester": "202208",
        "name": "Introduction to Data Science and Machine Learning",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "An introductory course to the recent developments in the fields of data science and machine learning. Emphasis will be given to mathematical and statistical understanding of commonly used methods and processes.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Minimum grade of C- in MATH241 or MATH340; and minimum grade of C- in MATH240,  MATH461 or MATH341;  and minimum grade of C- in STAT400 or STAT410;  students who have taken courses with content comparable to STAT400/410 may request permission of the instructor.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "STAT426 or CMSC320."
        },
        "sections": [
            "STAT426-0101"
        ]
    },
    {
        "course_id": "STAT430",
        "semester": "202208",
        "name": "Introduction to Statistical Computing with SAS",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Descriptive and inferential statistics. SAS software: numerical and graphical data summaries; merging, sorting and splitting data sets. Least squares, regression, graphics and informal diagnostics, interpreting results.  Categorical data, lifetime data, time series. Applications to engineering, life science, business and social science.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (STAT400, STAT410).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "STAT430-0201",
            "STAT430-0301",
            "STAT430-0401",
            "STAT430-0101",
            "STAT430-0501"
        ]
    },
    {
        "course_id": "STAT440",
        "semester": "202208",
        "name": "Sampling Theory",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Simple random sampling. Sampling for proportions. Estimation of sample size. Sampling with varying probabilities. Sampling: stratified, systematic, cluster, double, sequential, incomplete.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (STAT401, STAT420).",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": "STAT440 or SURV440."
        },
        "sections": [
            "STAT440-0101",
            "STAT440-0201"
        ]
    },
    {
        "course_id": "STAT464",
        "semester": "202208",
        "name": "Introduction to Biostatistics",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Probabilistic models. Sampling. Some applications of probability in genetics. Experimental designs. Estimation of effects of treatments. Comparative experiments. Fisher-Irwin test. Wilcoxon tests for paired comparisons.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "Must have completed one semester of calculus.",
            "formerly": null,
            "restrictions": "Junior standing or higher.",
            "additional_info": "Not acceptable toward degrees in MATH/STAT.",
            "also_offered_as": null,
            "credit_granted_for": "BIOE372 or STAT464."
        },
        "sections": [
            "STAT464-0101"
        ]
    },
    {
        "course_id": "STAT470",
        "semester": "202208",
        "name": "Actuarial Mathematics",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Major mathematical ideas involved in calculation of life insurance premiums, including compound interest and present valuation of future income streams; probability distribution and expected values derived from life tables; the interpolation of probability distributions from values estimated at one-year multiples; the 'Law of Large Numbers' describing the regular probabilistic behavior of large populations of independent individuals; and the detailed calculation of expected present values arising in insurance problems.",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "1 course with a minimum grade of C- from (MATH240, MATH461, MATH341); and 1 course with a minimum grade of C- from (MATH340, MATH241).",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Recommended: STAT400.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "STAT470-0101",
            "STAT470-0201"
        ]
    },
    {
        "course_id": "STAT498A",
        "semester": "202208",
        "name": "Selected Topics in Statistics",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Pass-Fail",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "STAT600",
        "semester": "202208",
        "name": "Probability Theory I",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Probability space; distribution functions and densities; Poissson limit theoreom; de Moivre-Laplace theorem; measure-theoretic definition of expectation; classification of measures on R; convergence of random variables; Radon-Nikodym theorem;LP spaces; conditional probabilities; independence of events, sigma-algebras and random variables; Bayes' theo rem; pi-systems and Dynkin systems; discrete Markov chains; random walks; gambler's ruin problem; Markov chains on a general phase space; Borel-cantelli lemmas; Kolmogorov inequality; three series theorem; laws of large numbers.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "STAT410.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "STAT600-0101"
        ]
    },
    {
        "course_id": "STAT689",
        "semester": "202208",
        "name": "Research Interactions in Statistics",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "STAT700",
        "semester": "202208",
        "name": "Mathematical Statistics I",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Sampling distributions including noncentral chi-squared, t, F. Exponential families, completeness. Sufficiency, factorization, likelihood ratio. Decision theory, Bayesian methods, minimax principle. Point estimation. Lehmann-Scheffe and Cramer-Rao theorems. Set estimation.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "STAT410; or students who have taken courses with comparable content may contact the department.",
            "formerly": null,
            "restrictions": null,
            "additional_info": "Offered fall only.",
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "STAT700-0101"
        ]
    },
    {
        "course_id": "STAT702",
        "semester": "202208",
        "name": "Survival Analysis",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Concepts/definitions of survival functions, hazard rate or hazard function, cumulative hazard functions, mean residual life, inversion formulas; Parametric models: exponential distribution, Weibull distribution; Censored/incomplete data and real data examples; right censored data, doubly censored data, interval censored data, truncated data; Nonparametric maximal likelihood estimator for the lifetime distribution under different types of censoring (e.g., Kaplan-Meier estimator), self-consistency estimators, the EM algorithm, applications of the empirical likelihood; Semiparametric models: accelerated lifetime model, proportional hazard model, the Cox model; Goodness of fit tests and diagnostic methods for model checking.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "STAT410 and STAT420; or students who have taken courses with comparable content may contact the department; or permission of instructor.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "STAT702-0101"
        ]
    },
    {
        "course_id": "STAT705",
        "semester": "202208",
        "name": "Computational Statistics",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Modern methods of computational statistics and their application to both practical problems and research. S-Plus and SAS programming with emphasis on S-Plus. S-Plus objects and functions, and SAS procedures. Topics include data management and graphics, Monte Carlo and simulation, bootstrapping, numerical optimization in statistics, linear and generalized linear models, nonparametric regression, time series analysis.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "STAT700 or STAT420.",
            "formerly": "STAT798C.",
            "restrictions": null,
            "additional_info": "Recommended: Have some programming experience (any language).",
            "also_offered_as": null,
            "credit_granted_for": "STAT705 or STAT798C."
        },
        "sections": [
            "STAT705-0101"
        ]
    },
    {
        "course_id": "STAT740",
        "semester": "202208",
        "name": "Linear Statistical Models I",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "3",
        "description": "Least squares, general linear models, estimability and Gauss-Markov theorem. Simple and multiple linear regression, analysis of residuals and diagnostics, polynomial models, variable selection. Qualitative predictors, one and two way analysis of variance, multiple comparisons, analysis of covariance. Nonlinear least squares. High-level statistical computer software will be used for data analysis throughout the course.",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": "STAT700 or STAT420.",
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": [
            "STAT740-0101"
        ]
    },
    {
        "course_id": "STAT799",
        "semester": "202208",
        "name": "Master's Thesis Research",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "STAT808A",
        "semester": "202208",
        "name": "Selected Topics in Probability",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "STAT818A",
        "semester": "202208",
        "name": "Selected Topics in Statistics",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular",
            "Audit"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "STAT898",
        "semester": "202208",
        "name": "Pre-Candidacy Research",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "1",
        "description": "",
        "grading_method": [
            "Regular"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    },
    {
        "course_id": "STAT899",
        "semester": "202208",
        "name": "Doctoral Dissertation Research",
        "dept_id": "STAT",
        "department": "Statistics and Probability",
        "credits": "6",
        "description": "",
        "grading_method": [
            "Sat-Fail"
        ],
        "gen_ed": [],
        "core": [],
        "relationships": {
            "coreqs": null,
            "prereqs": null,
            "formerly": null,
            "restrictions": null,
            "additional_info": null,
            "also_offered_as": null,
            "credit_granted_for": null
        },
        "sections": []
    }
];

function getTitleByCourseId(courseId) {
  for (var i = 0; i < CMSCCourses.length; i++) {
    var course = CMSCCourses[i];
    if (course == courseId) {
      return course.title;
    }
  }
}

function getDescriptionByCourseId(courseId) {
  for (var i = 0; i < CMSCCourses.length; i++) {
    var course = CMSCCourses[i];
    if (course == courseId) {
      return course.description;
    }
  }
}

function getCreditByCourseId(courseId) {
  for (var i = 0; i < CMSCCourses.length; i++) {
    var course = CMSCCourses[i];
    if (course == courseId) {
      return parseInt(course.credits);
    }
  }
}

function getPreReqs(courseId) {
    for (var i = 0; i < CMSCCourses.length; i++) {
        var course = CMSCCourses[i];
        if (course == courseId) {
          return course.relationships.prereqs;
        }
      }
}

/**
 * The function checks if a user finished the required lower level math coursework.
 * @param {Array} classes - An array representing the classes (e.g., MATH141) taken
 * @params {boolean} isDataScience - A boolean representing if the user is a data science student
 * @return {string} - A string representing the error message
 */

function completedLowerMath(classes, isDataScience) {
  var sortedClasses = classes.sort();
  var m140 = false;
  var m141 = false;
  var s4xx = false;
  var ms4xx = false;
  var m240 = false;
  var i;
  var msg = "";

  for (i = 0; i < sortedClasses.length; i++) {
    var course = sortedClasses[i];
    if (course == "MATH140") {
      m140 = true;
    }
    if (course == "MATH141") {
      m141 = true;
    }
    if (course == "MATH240") {
      m240 = true;
    }
    if (
      // STAT 4XX
      course.substring(0, 4) == "STAT" &&
      course.charAt(4) == "4" &&
      // 3 credits
      getCreditByCourseId(course) == "3"
    ) {
      s4xx = true;
    }
    if (
      // the previous 4XX must be satisfied first
      s4xx &&
      // STAT/MATH 4XX
      (course.substring(0, 4) == "STAT" ||
      course.substring(0, 4) == "MATH") &&
      // 3 or 4 credits
      (getCreditByCourseId(course) == "3" || getCreditByCourseId(course) == "4") &&
      // prereq of MATH141
      getPreReqs(course).includes("MATH141")
    ) {
      ms4xx = true;
    }
  }

  if (!m140) {
    msg += "You must take MATH140. \n";
  }
  if (!m141) {
    msg += "You must take MATH141. \n";
  }
  if (isDataScience && !m240) {
    msg += "You must take MATH240. \n";
  }
  if (!s4xx) {
    msg += "You must take STAT 4XX. \n";
  }
  if (!ms4xx) {
    msg += "You must take STAT/MATH 4XX. \n";
  }

  /* if (isDataScience) {

    return m140 && m141 && s4xx && ms4xx;
  } else {
    return m140 && m141 && m240 && s4xx && ms4xx;
  } */
  return msg;
}

/**
 * The function checks if a user finished the required lower level CS coursework.
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @params {boolean} e131 - A boolean representing if the user is exempt from CMSC131
 * @params {boolean} e132 - A boolean representing if the user is exempt from CMSC132
 * @params {boolean} e216 - A boolean representing if the user is exempt from CMSC216
 * @params {boolean} e250 - A boolean representing if the user is exempt from CMSC250
 * @return {string} - A string representing the error message
 */

function completedLowerCS(classes, e131, e132, e216, e250) {
  var sortedClasses = classes.sort();
  var c131 = e131 ? true : false;
  var c133 = false;
  var c132 = e132 ? true : false;
  var c216 = e216 ? true : false;
  var c250 = e250 ? true : false;
  var c330 = false;
  var c351 = false;
  var i;
  var msg = "";

  for (i = 0; i < sortedClasses.length; i++) {
    var courseId = sortedClasses[i];
    if (courseId == "CMSC131") {
      c131 = true;
    }
    if (courseId == "CMSC133") {
      c133 = true;
    }
    if (courseId == "CMSC216") {
      c216 = true;
    }
    if (courseId == "CMSC250") {
      c250 = true;
    }
    if (courseId == "CMSC330") {
      c330 = true;
    }
    if (courseId == "CMSC351") {
      c351 = true;
    }
  }

  if (!c131 && !c133) {
    msg += "You must take CMSC131 or CMSC133. \n";
  }
  if (!c132) {
    msg += "You must take CMSC132. \n";
  }
  if (!c216) {
    msg += "You must take CMSC216. \n";
  }
  if (!c250) {
    msg += "You must take CMSC250. \n";
  }
  if (!c330) {
    msg += "You must take CMSC330. \n";
  }
  if (!c351) {
    msg += "You must take CMSC351. \n";
  }

  /* if ((c131 || c133) && c132 && c216 && c250 && c330 && c351) {
    return true;
  }
  return false; */
  return msg;
}

/**
 * The function checks if a user finished 45-credit LEP benchmarks.
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @params {number} gpa - A float representing the user's current GPA
 * @return {string} - A string representing the error message
 */

function completed45LEPBenchmark(classes, gpa) {
  var sortedClasses = classes.sort();
  var c131 = false;
  var c132 = false;
  var m140 = false;
  var i;
  var msg = "";

  for (i = 0; i < sortedClasses.length; i++) {
    var courseId = sortedClasses[i];
    if (courseId == "CMSC131") {
      c131 = true;
    }

    if (courseId == "CMSC132") {
      c132 = true;
    }
    if (courseId == "MATH140") {
      m140 = true;
    }
  }

  if (!c131) {
    msg += "You must take CMSC131. \n";
  }
  if (!c132) {
    msg += "You must take CMSC132. \n";
  }
  if (!m140) {
    msg += "You must take MATH140. \n";
  }
  if (gpa < 2.0) {
    msg += "You must have a GPA of 2.0 or higher. \n";
  }

  /* if (c131 && c132 && m140 && gpa >= 2.0) {
    return true;
  }
  return false; */
  return msg;
}

/**
 * The function checks if a user finished 75-credit LEP benchmarks.
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @params {number} gpa - A float representing the user's current GPA
 * @return {string} - A string representing the error message
 */

function completed75LEPBenchmark(classes, gpa) {
  var sortedClasses = classes.sort(classes, gpa);
  var c330 = false;
  var c351 = false;
  var s4xx = false;
  var mas = false;
  var i;
  var msg = "";

  for (i = 0; i < sortedClasses.length; i++) {
    var course = sortedClasses[i]
    var courseId = course;
    var coursePrereqs = course.relationships.prereqs;
    if (courseId == "CMSC330") {
      c330 = true;
    }

    if (courseId == "CMSC351") {
      c351 = true;
    }
    if (
      // STAT 4XX
      courseId.substring(0, 4) == "STAT" &&
      courseId.charAt(4) == "4" &&
      // prereq of MATH141
      coursePrereqs.includes("MATH141")
    ) {
      s4xx = true;
    }
    if (
      // STAT/MATH/AMSC XXX
      (courseId.substring(0, 4) == "STAT" ||
      courseId.substring(0, 4) == "MATH" ||
      courseId.substring(0, 4) == "AMSC") &&
      // prereq of MATH141
      coursePrereqs.includes("MATH141")
    ) {
      mas = true;
    }
  }

  if (!c330) {
    msg += "You must take CMSC330. \n";
  }
  if (!c351) {
    msg += "You must take CMSC351. \n";
  }
  if (!s4xx || !mas) {
    msg += "You must take STAT 4XX or MATH/STAT/AMSC 4XX with prerequisite of MATH141. \n";
  }
  if (gpa < 2.0) {
    msg += "You must have a GPA of 2.0 or higher. \n";
  }

  /* if (c330 && c351 && (s4xx || mas) && gpa >= 2.0) {
    return true;
  }
  return false; */
  return msg;
}

/*
  Auxiliary function for upper level computer science courses
*/

/**
 * The function determines the area of an upper level CS course.
 * @param {string} course - A string representing the course (e.g., CMSC131)
 * @return {number} - 6 being an elective and 0 not found
 */

function getCourseArea(course) {
  var courseNumber = course.substring(4);
  if (
    courseNumber == "320" ||
    courseNumber == "335" ||
    courseNumber == "388" ||
    courseNumber == "389" ||
    courseNumber == "389N" ||
    courseNumber == "425" ||
    courseNumber == "472" ||
    courseNumber == "473" ||
    courseNumber == "475" ||
    courseNumber == "498" ||
    courseNumber == "498A" ||
    courseNumber == "499A"
  ) {
    return 6;
  } else if (
    courseNumber.charAt[1] == "1" ||
    courseNumber == "498X" ||
    courseNumber == "498K"
  ) {
    return 1;
  } else if (
    courseNumber.charAt[1] == "2" ||
    courseNumber == "470" ||
    courseNumber == "471" ||
    courseNumber == "498F" ||
    courseNumber == "498V"
  ) {
    return 2;
  } else if (courseNumber.charAt[1] == "3" || courseNumber == "471") {
    return 3;
  } else if (courseNumber.charAt[1] == "5" || courseNumber == "474") {
    return 4;
  } else if (courseNumber.charAt[1] == "6") {
    return 5;
  }
  return 0;
}

/**
 * The function checks if a user finished the general track
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @return {string} - A string representing the error message
 */

function completedGeneralTrack(classes) {
  var sortedClasses = classes.sort();
  var a1 = 0;
  var a2 = 0;
  var a3 = 0;
  var a4 = 0;
  var a5 = 0;
  var electives = 0;
  var i;
  var nonZeroAreas = 0;
  var electiveCredits = 0;
  var electiveList = [];
  var msg = "";

  for (i = 0; i < sortedClasses.length; i++) {
    var curr = sortedClasses[i];
    var area = getCourseArea(curr);
    if (area == 1) {
      if (a1 > 3) {
        electives++;
        electiveList.push(curr);
      } else {
        a1++;
      }
    } else if (area == 2) {
      if (a1 > 3) {
        electives++;
        electiveList.push(curr);
      } else {
        a2++;
      }
    } else if (area == 3) {
      if (a1 > 3) {
        electives++;
        electiveList.push(curr);
      } else {
        a3++;
      }
    } else if (area == 4) {
      if (a1 > 3) {
        electives++;
        electiveList.push(curr);
      } else {
        a4++;
      }
    } else if (area == 5) {
      if (a1 > 3) {
        electives++;
        electiveList.push(curr);
      } else {
        a5++;
      }
    } else if (area == 6) {
      electiveList.push(curr);
      electives++;
    }
  }

  for (i = 0; i < sortedClasses.length; i++) {
    if (getCourseArea(sortedClasses[i]) != 0) {
        nonZeroAreas++;
    }
  }

  for (i = 0; i < electiveList.length; i++) {
    electiveCredits += getCourseCredits(electiveList[i]);
  }

  if (a1 > 0) {
    nonZeroAreas++;
  }
  if (a2 > 0) {
    nonZeroAreas++;
  }
  if (a3 > 0) {
    nonZeroAreas++;
  }
  if (a4 > 0) {
    nonZeroAreas++;
  }
  if (a5 > 0) {
    nonZeroAreas++;
  }

  if (a1 + a2 + a3 + a4 + a5 + electives <= 4) {
    msg += "You must take at least 5 courses in the general track. \n";
  }
  if (nonZeroAreas <= 2) {
    msg += "You must take courses from at least 3 areas in the general track. \n";
  }
  if (electives <= 1) {
    msg += "You must take at least 2 electives in the general track. \n";
  }
  if (electiveCredits <= 5) {
    msg += "You must have at least 5 elective credits in the general track. \n";
  }
  return msg;

  /* if (
    a1 + a2 + a3 + a4 + a5 + electives > 4 &&
    nonZeroAreas > 2 &&
    electives > 1 &&
    electiveCredits > 5
  ) {
    return true;
  }
  return false; */
}

/**
 * The function checks if a user finished the cybersecurity track
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @return {string} - A string representing the error message
 */

function completedCybersecurity(classes) {
  sorted = classes.sort();
  var c414 = false;
  var c456 = false;
  var count = 0;
  var electives = 0;
  var i;
  var msg = "";

  for (i = 0; i < sorted.length; i++) {
    var curr = sorted[i];
    if (curr == "CMSC414") {
      c414 = true;
    } else if (curr == "CMSC456") {
      c456 = true;
    } else if (curr = "CMSC411" || curr == "CMSC412" || curr == "CMSC417" || curr == "CMSC430" || curr == "CMSC433" || curr == "CMSC451") {
      count++;
    } else {
      electives += sorted[i].credits;
    }
  }

  if (!c414) {
    msg += "You must take CMSC414 in the cybersecurity track. \n";
  }
  if (!c456) {
    msg += "You must take CMSC456 in the cybersecurity track. \n";
  }
  if (count <= 3) {
    msg += "You must take at least 4 courses from the given list in the cybersecurity track. \n";
  }
  if (electives < 3) {
    msg += "You must have at least 3 elective credits in the cybersecurity track. \n";
  }
  return msg;
  
  /* if (c414 && c456 && count > 3 && electives > 2) {
    return true;
  }
  return false; */
}

/**
 * The function checks if a user finished the data science track
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @return {string} - A string representing the error message
 */

function completedDataScience(classes) {
  var sorted = classes.sort();
  var c320 = false;
  var c422 = false;
  var c424 = false;
  var category1 = 0;
  var category2 = 0;
  var category3 = 0;
  var i = 0;
  var msg = "";

  for (i = 0; i < sorted.length; i++) {
    curr = sorted[i];
    if (curr == "CMSC320") {
      c320 = true;
    } else if (curr == "CMSC422") {
      c422 = true;
    } else if (curr == "CMSC424") {
      c424 = true;
    } else if (curr == "CMSC402" || curr == "CMSC420" || curr == "CMSC421" || curr == "CMSC423" || curr == "CMSC425" || curr == "CMSC426" || curr == "CMSC427" || curr == "CMSC470") {
      category1++;
    } else if (curr == "CMSC451" || curr == "CMSC454" || curr == "460") {
      category2++;
    } else if (curr == "CMSC411" || curr == "CMSC412" || curr == "CMSC414" || curr == "CMSC417" || curr == "CMSC430" || curr == "CMSC433" || curr == "CMSC434" || curr == "CMSC435") {
      category3++;
    }
  }

  if (!c320) {
    msg += "You must take CMSC320 in the data science track. \n";
  }
  if (!c422) {
    msg += "You must take CMSC422 in the data science track. \n";
  }
  if (!c424) {
    msg += "You must take CMSC424 in the data science track. \n";
  }
  if (category1 < 1) {
    msg += "You must take at least 1 course from the first list in the data science track. \n";
  }
  if (category2 < 1) {
    msg += "You must take at least 1 course from the second list in the data science track. \n";
  }
  if (category3 < 2) {
    msg += "You must take at least 2 courses from the third list in the data science track. \n";
  }
  return msg;

  /* if (c320 && c422 && c424 && category1 > 0 && category2 > 0 && category3 > 1) {
    return true;
  }
  return false; */
}

/**
 * The function checks if a user finished the quantum information track
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @return {string} - A string representing the error message
 */

function completedQuantumInformation(classes) {
  sorted = classes.sort();
  var c457 = false;
  var p467 = false;
  electives = 0;
  var a4 = 0;
  var otherArea = 0;
  var i = 0;
  var msg = "";

  for (i = 0; i < sorted.length; i++) {
    curr = sorted[i];
    if (curr == "CMSC457") {
      c457 = true;
    } else if (curr == "CMSC467") {
      p467 = true;
    } else{
      category = getCourseArea(curr);
      if (category == 4) {
        a4++;
      } else if (category == 6) {
        electives+= sorted[i].credits;
      } else {
        otherArea++;
      }

    }
  }

  if (!c457) {
    msg += "You must take CMSC457 in the quantum information track. \n";
  }
  if (!p467) {
    msg += "You must take PHYC467 in the quantum information track. \n";
  }
  if (a4 < 2) {
    msg += "You must take at least 2 courses outside area 4 in the quantum information track. \n";
  }
  if (a4 + otherArea < 4) {
    msg += "You must take at least 4 courses from the distributive areas in the quantum information track. \n";
  }
  if (electives < 3) {
    msg += "You must have at least 3 elective credits in the quantum information track. \n";
  }
  return msg;

  /* if (c457 && p467 && otherArea > 1 && (a4 + otherArea > 3) && electives > 2) {
    return true;
  }
  return false; */
}

/**
 * The function checks if a user finished the machine learning track
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @return {string} - A string representing the error message
 */

function completedMachineLearning(classes) {
  sorted = classes.sort();
  var c320 = false;
  var c421 = false;
  var c422 = false;
  var category1 = 0;
  var electives = 0;
  var i = 0;
  var msg = "";

  for (i = 0; i < sorted.length; i++) {
    curr = sorted[i];
    if (curr == "CMSC320") {
      c320 = true;
    } else if (curr == "CMSC421") {
      c421 = true;
    } else if (curr == "CMSC422") {
      c422 = true;
    } else if (curr == "CMSC426" || curr == "CMSC460" || curr == "CMSC466" || curr == "MATH401" || curr == "CMSC470" || curr == "CMSC472" || curr == "CMSC473" || curr == "CMSC474" || curr == "CMSC476") {
      category1++;
    } else {
      electives += sorted[i].credits;
    }
  }

  if (!c320) {
    msg += "You must take CMSC320 in the machine learning track. \n";
  }
  if (!c421) {
    msg += "You must take CMSC421 in the machine learning track. \n";
  }
  if (!c422) {
    msg += "You must take CMSC422 in the machine learning track. \n";
  }
  if (category1 < 2) {
    msg += "You must take at least 2 courses from the given list in the machine learning track. \n";
  }
  if (electives < 6) {
    msg += "You must have at least 6 elective credits in the machine learning track. \n";
  }
  return msg;

  /* if (c320 && c421 && c422 && category1 > 1 && electives > 5) {
    return true;
  }
  return false; */
}
