// add the following line to html file
// <script src="../js/code.js" defer></script>
window.onload = main;
/* Global variables. */

function main() {}

// replace with json file
var CMSCCourses = [];

function getTitleByCourseId(courseId) {
  for (var i = 0; i < CMSCCourses.length; i++) {
    var course = CMSCCourses[i];
    if (course.course_id == courseId) {
      return course.title;
    }
  }
}

function getDescriptionByCourseId(courseId) {
  for (var i = 0; i < CMSCCourses.length; i++) {
    var course = CMSCCourses[i];
    if (course.course_id == courseId) {
      return course.description;
    }
  }
}

function getCreditByCourseId(courseId) {
  for (var i = 0; i < CMSCCourses.length; i++) {
    var course = CMSCCourses[i];
    if (course.course_id == courseId) {
      return parseInt(course.credits);
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
    if (course.course_id == "MATH140") {
      m140 = true;
    }
    if (course.course_id == "MATH141") {
      m141 = true;
    }
    if (course.course_id == "MATH240") {
      m240 = true;
    }
    if (
      // STAT 4XX
      course.course_id.substring(0, 4) == "STAT" &&
      course.course_id.charAt(4) == "4" &&
      // 3 credits
      course.credits == "3"
    ) {
      s4xx = true;
    }
    if (
      // the previous 4XX must be satisfied first
      s4xx &&
      // STAT/MATH 4XX
      (course.course_id.substring(0, 4) == "STAT" ||
      course.course_id.substring(0, 4) == "MATH") &&
      // 3 or 4 credits
      (course.credits == "3" || course.credits == "4") &&
      // prereq of MATH141
      course.relationships.prereqs.includes("MATH141")
    ) {
      ms4xx = true;
    }
  }

  if (!m140) {
    msg += "You must take MATH140. <br>";
  }
  if (!m141) {
    msg += "You must take MATH141. <br>";
  }
  if (isDataScience && !m240) {
    msg += "You must take MATH240. <br>";
  }
  if (!s4xx) {
    msg += "You must take STAT 4XX. <br>";
  }
  if (!ms4xx) {
    msg += "You must take STAT/MATH 4XX. <br>";
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
    var courseId = sortedClasses[i].course_id;
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
    msg += "You must take CMSC131 or CMSC133. <br>";
  }
  if (!c132) {
    msg += "You must take CMSC132. <br>";
  }
  if (!c216) {
    msg += "You must take CMSC216. <br>";
  }
  if (!c250) {
    msg += "You must take CMSC250. <br>";
  }
  if (!c330) {
    msg += "You must take CMSC330. <br>";
  }
  if (!c351) {
    msg += "You must take CMSC351. <br>";
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
    var courseId = sortedClasses[i].course_id;
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
    msg += "You must take CMSC131. <br>";
  }
  if (!c132) {
    msg += "You must take CMSC132. <br>";
  }
  if (!m140) {
    msg += "You must take MATH140. <br>";
  }
  if (gpa < 2.0) {
    msg += "You must have a GPA of 2.0 or higher. <br>";
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
    var courseId = course.course_id;
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
    msg += "You must take CMSC330. <br>";
  }
  if (!c351) {
    msg += "You must take CMSC351. <br>";
  }
  if (!s4xx || !mas) {
    msg += "You must take STAT 4XX or MATH/STAT/AMSC 4XX with prerequisite of MATH141. <br>";
  }
  if (gpa < 2.0) {
    msg += "You must have a GPA of 2.0 or higher. <br>";
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
  courseNumber = course.course_id.substring(4);
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
    var curr = sortedClasses[i].course_id;
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
    if (getCourseArea(sortedClasses[i].course_id) != 0) {
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
    msg += "You must take at least 5 courses in the general track. <br>";
  }
  if (nonZeroAreas <= 2) {
    msg += "You must take courses from at least 3 areas in the general track. <br>";
  }
  if (electives <= 1) {
    msg += "You must take at least 2 electives in the general track. <br>";
  }
  if (electiveCredits <= 5) {
    msg += "You must have at least 5 elective credits in the general track. <br>";
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
    var curr = sorted[i].course_id;
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
    msg += "You must take CMSC414 in the cybersecurity track. <br>";
  }
  if (!c456) {
    msg += "You must take CMSC456 in the cybersecurity track. <br>";
  }
  if (count <= 3) {
    msg += "You must take at least 4 courses from the given list in the cybersecurity track. <br>";
  }
  if (electives < 3) {
    msg += "You must have at least 3 elective credits in the cybersecurity track. <br>";
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
    curr = sorted[i].course_id;
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
    msg += "You must take CMSC320 in the data science track. <br>";
  }
  if (!c422) {
    msg += "You must take CMSC422 in the data science track. <br>";
  }
  if (!c424) {
    msg += "You must take CMSC424 in the data science track. <br>";
  }
  if (category1 < 1) {
    msg += "You must take at least 1 course from the first list in the data science track. <br>";
  }
  if (category2 < 1) {
    msg += "You must take at least 1 course from the second list in the data science track. <br>";
  }
  if (category3 < 2) {
    msg += "You must take at least 2 courses from the third list in the data science track. <br>";
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
    curr = sorted[i].course_id;
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
    msg += "You must take CMSC457 in the quantum information track. <br>";
  }
  if (!p467) {
    msg += "You must take PHYC467 in the quantum information track. <br>";
  }
  if (a4 < 2) {
    msg += "You must take at least 2 courses outside area 4 in the quantum information track. <br>";
  }
  if (a4 + otherArea < 4) {
    msg += "You must take at least 4 courses from the distributive areas in the quantum information track. <br>";
  }
  if (electives < 3) {
    msg += "You must have at least 3 elective credits in the quantum information track. <br>";
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
    curr = sorted[i].course_id;
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
    msg += "You must take CMSC320 in the machine learning track. <br>";
  }
  if (!c421) {
    msg += "You must take CMSC421 in the machine learning track. <br>";
  }
  if (!c422) {
    msg += "You must take CMSC422 in the machine learning track. <br>";
  }
  if (category1 < 2) {
    msg += "You must take at least 2 courses from the given list in the machine learning track. <br>";
  }
  if (electives < 6) {
    msg += "You must have at least 6 elective credits in the machine learning track. <br>";
  }
  return msg;

  /* if (c320 && c421 && c422 && category1 > 1 && electives > 5) {
    return true;
  }
  return false; */
}
