

let cards=[
    {
        "Image": "images/imageMask.png",
        "Title":"Acceleration",
        "Subject":"physics",
        "Grade":"Grade 7",
        "Grade1" : "+2",
        "Units":4 ,
        "Lesson":18,
        "Topics":24,
        "Teacher":"Mr. Frank's Class B",
        "Students":50,
        "start-date":"21-Jan-2020 -",
        "end-date":"21-Aug-2020"    
    },
    {
        "Image": "images/imageMask-1.png",
        "Title":"Dispacement, Velocity and Speed",
        "Subject":"physics",
        "Grade":"Grade 6",
        "Grade1" : "+3",
        "Units":2 ,
        "Lesson":15,
        "Topics":20,
        "Teacher":"No class",
        // "Students":"",
        // "start-date":"",
        // "end-date":""   
    },
    {
        "Image":"images/imageMask-3.png",
        "Title":"Introduction to biology: Micro organisms and how they affect..",
        "Subject":"physics",
        "Grade":"Grade 4",
        "Grade1" : "+1",
        "Units":5 ,
        "Lesson":16,
        "Topics":22,
        "Teacher":"All Classes",
        "Students":"300",
        // "start-date":"",
        // "end-date":""   
    },
    {
        "Image":"images/imageMask-2.png",
        "Title":"Introduction to High School Mathematics",
        "Subject":"physics",
        "Grade":"Grade 8",
        "Grade1" : "+3",
        "Units":4,
        // "Lesson":"",
        // "Topics":"",
        "Teacher":"Mr. Frank's Class A",
        "Students":44,
        "start-date":"14-Oct 2019 -",
        "end-date":"20-Oct-2020"    
    },

]
let images =[
    {
        "img":"icons/favourite.svg",
        "img1":"icons/preview.svg",
        "img2":"icons/manage course.svg",
        "img3":"icons/grade submissions.svg",
        "img4":"icons/reports.svg"
    }
]
Alerts =[
    {
        "content":"License for Introduction to Algebra has been assigned to your school",
        "date": "15-Sep-2018 at 07:21", 
    },
    {
        "content":"Lesson 3 Practice Worksheet overdue for Amy Santiago",
        "course":"Advanced Mathematics",
        "date":"15-Sep-2018 at 05:21 pm"
    },
    {
        "content":"15-Sep-2018 at 05:21 pm",
        "date":"14-Sep-2018 at 01:21 pm"
    },
    {
        "content":"15 submissions ready for evaluation",
        "course":"Basics of Algebra",
        "date":"13-Sep-2018 at 01:15 pm"
    },
    {
        "content":"License for Basic Concepts in Geometry has been assigned to your... school",
        "date":"15-Sep-2018 at 07:21 pm"
    },
    {
        "content":"Lesson 3 Practice Worksheet overdue for Sam Diego",
        "course":"Advanced Mathematics",
        "date":"15-Sep-2018 at 07:21 pm"
    }

]

Announcements =[
    {
        "pa":" Wilson Kumar",
        "content":"No classes will be held on 21st Nov",
        "files":"2 files are attached",
        "date":"15-Sep-2018 at 07:21 pm"
    },
    {
        "pa":" Samson White",
        "content":"Guest lecture on Geometry on 20th September",
        "files":"2 files are attached",
        "date":"15-Sep-2018 at 07:21 pm"
    },
    {
        "pa":" Wilson Kumar",
        "content":"Additional course materials available on request",
        "date":"15-Sep-2018 at 07:21 pm",
        "course":"Course: Mathematics 101"
    },
    {
        "pa":" Wilson Kumar",
        "content":"No classes will be held on 25th Dec",
        "date":"15-Sep-2018 at 07:21 pm"
    },
    {
        "pa":" Wilson Kumar",
        "content":"Additional course materials available on request",
        "files":"2 files are attached",
        "date":"15-Sep-2018 at 07:21 pm",
        "course":"Course: Mathematics 101"
    }
]

window.addEventListener('DOMContentLoaded', (event) => {
    let CardHTML="";
    let cardDivision = document.querySelector('.main');


    for (let i=0 ; i< cards.length  ;i++){
        let index = Object.keys(cards[i]);
        CardHTML +=`
        <div class="one">
            <div class="two ">
                <img src="${cards[i]["Image"]} " alt="">
                <div> 
                    <p> ${cards[i]["Title"] ? cards[i]["Title"] :`` }</p>
                    <div id="grade">
                        <p> ${cards[i]["Subject"] ? cards[i]["Subject"] :`` }</p>
                        <p>${cards[i]["Grade"] ? cards[i]["Grade"] :`` } <span style="color: green;">${cards[i]["Grade1"] ? cards[i]["Grade1"] :`` } </span></p>
                    </div>
                    <p>
                        <strong>${cards[i]["Units"] ? cards[i]["Units"] :`` } </strong> ${ index.includes("Units") ? "Units"  : ""}  
                        <strong>${cards[i]["Lesson"] ? cards[i]["Lesson"] :`` }</strong> ${ index.includes("Lesson") ? "Lesson"  : ""}
                        <strong>${cards[i]["Topics"] ? cards[i]["Topics"] :`` } </strong>${ index.includes("Topics") ? "Topics"  : ""}  
                    </p>
                    <select name="tech" id="tech" >
                        <option value="#">${cards[i]["Teacher"] ? cards[i]["Teacher"] :`No Class` } </option>
                    </select>
                    
                    ${cards[i]["Students"] 
                    ? `<p>
                    <span>${cards[i]["Students"] ? cards[i]["Students"] :``}  ${ index.includes("Students") ? "Students"  : ""}
                    </span>${cards[i]["start-date"] ? cards[i]["start-date"] : `` } ${cards[i]["end-date"] ? cards[i]["end-date"] : ``}
                    </p>` 
                    :`<p>
                    ${cards[i]["start-date"] ? cards[i]["start-date"] : `` } ${cards[i]["end-date"] ? cards[i]["end-date"] : ``}
                    </p>`}
 
                </div>
                <img src="${images[0]["img"]}" alt="star" id="star">
            </div>

            <div class="icons">
                <img src="${images[0]["img1"]}" alt="">
                <img src="${images[0]["img2"]}" alt="">
                <img src="${images[0]["img3"]}" alt="">
                <img src="${images[0]["img4"]}" alt="">
            </div>
        </div>
    
    `
    }
    cardDivision.innerHTML = CardHTML;

    let alertHTML =``, announcementHTML =``;
    let allalertsHTML = document.querySelector('.alert .allAlerts');
    let allannnoucementHTML =document.querySelector('.announcement .allAnnouncements')
    for (let i=0;i < Alerts.length ; i++){
        let alertkeys = Object.keys(Alerts[i]);
        alertHTML +=`<div class="Alert_1">

        <div class="Alert_content">
            <p>${alertkeys.includes("content") ? Alerts[i]["content"]: ``}</p>
            <p><span class="material-icons">check_circle</span></p>
        </div>
        ${alertkeys.includes("course") ? `<p id="Alert_course" ><span style="color:#6E6E6E ;">Course:</span> ${ Alerts[i]["course"]}</p>`: ``}
        
        
        <p id="alert_date">${alertkeys.includes("date") ? Alerts[i]["date"]: ``}</p>
    </div>`
    }
    

    for(let i=0 ;i < Announcements.length ;i++){
        let annoucementkeys = Object.keys(Announcements[i]);
        announcementHTML += ` <div class="Announcement_1">
        <div class="Announcement_section_1">
            <p><span style="color: #6E6E6E;font-weight: lighter;">PA:</span> ${annoucementkeys.includes("pa") ? Announcements[i]["pa"]: ``}</p>
            <p><span class="material-icons">check_circle</span></p>
        </div>
        <div class="Announcement_section_2">
            <p>${annoucementkeys.includes("content") ? Announcements[i]["content"]: ``}</p>
        </div>
        ${annoucementkeys.includes("course") ? `<p id="Announce_course" style="color:#6E6E6E ;"> ${  Announcements[i]["course"]}</p>`: ``}
        
        <div class="Announcement_section_3">
        ${annoucementkeys.includes("files") ? `<p><span class="material-icons">attach_file</span>${Announcements[i]["files"]}</p>`: ``}
        ${annoucementkeys.includes("date") ? `<p style="margin-left: auto;">${Announcements[i]["date"]}</p>`: ``}
        
        </div>
    </div>`
    }
    allalertsHTML.innerHTML = alertHTML;
    allannnoucementHTML.innerHTML = announcementHTML;


});
