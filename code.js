// add the following line to html file
// <script src="code.js" defer></script>
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
 * @return {boolean}
 */

function completedLowerMath(classes, isDataScience) {
  var sortedClasses = classes.sort();
  var m140 = false;
  var m141 = false;
  var s4xx = false;
  var ms4xx = false;
  var m240 = false;
  var i;

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

  if (isDataScience) {
    return m140 && m141 && s4xx && ms4xx;
  } else {
    return m140 && m141 && m240 && s4xx && ms4xx;
  }
}

/**
 * The function checks if a user finished the required lower level CS coursework.
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @params {boolean} e131 - A boolean representing if the user is exempt from CMSC131
 * @params {boolean} e132 - A boolean representing if the user is exempt from CMSC132
 * @params {boolean} e216 - A boolean representing if the user is exempt from CMSC216
 * @params {boolean} e250 - A boolean representing if the user is exempt from CMSC250
 * @return {boolean}
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

  if ((c131 || c133) && c132 && c216 && c250 && c330 && c351) {
    return true;
  }
  return false;
}

/**
 * The function checks if a user finished 45-credit LEP benchmarks.
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @params {number} gpa - A float representing the user's current GPA
 * @return {boolean}
 */

function completed45LEPBenchmark(classes, gpa) {
  var sortedClasses = classes.sort();
  var c131 = false;
  var c132 = false;
  var m140 = false;
  var i;

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

  if (c131 && c132 && m140 && gpa > 2.0) {
    return true;
  }
  return false;
}

/**
 * The function checks if a user finished 75-credit LEP benchmarks.
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @params {number} gpa - A float representing the user's current GPA
 * @return {boolean}
 */

function completed75LEPBenchmark(classes, gpa) {
  var sortedClasses = classes.sort(classes, gpa);
  var c330 = false;
  var c351 = false;
  var s4xx = false;
  var mas = false;
  var i;

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

  if (c330 && c351 && (s4xx || mas) && gpa > 2.0) {
    return true;
  }
  return false;
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
 * @return {boolean}
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

  if (
    a1 + a2 + a3 + a4 + a5 + electives > 4 &&
    nonZeroAreas > 2 &&
    electives > 1 &&
    electiveCredits > 5
  ) {
    return true;
  }
  return false;
}

/**
 * The function checks if a user finished the cybersecurity track
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @return {boolean}
 */

function completedCybersecurity(classes) {}

/**
 * The function checks if a user finished the data science track
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @return {boolean}
 */

function completedDataScience(classes) {}

/**
 * The function checks if a user finished the quantum information track
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @return {boolean}
 */

function completedQuantumInformation(classes) {}

/**
 * The function checks if a user finished the machine learning track
 * @param {Array} classes - An array representing the classes (e.g., CMSC131) taken
 * @return {boolean}
 */

function completedMachineLearning(classes) {}
