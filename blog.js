let blogs = []
 
function addContent (i){
    i.preventDefault();

    let title = document.getElementById("input-blog-title").value
    let content = document.getElementById("input-blog-content").value
    let image = document.getElementById("input-blog-image").files

    image = URL.createObjectURL(image[0])

    // console.log (image)

    let blog ={
        title : title,
        content : content,
        image : image,
        author : "Muh. Dhio Ingra Fernanda",
        postAt : new Date (),
    }

    blogs.push(blog)

console.log(blog.postAt)

    console.log(blogs)
    // alert ('ini adalah alert addContent')
    // console.log (blogs)

    for(let i = 0; i < blogs.length; i++) {
        console.log(`Index ${i}, Title : ${title}, Content : ${content}`)
    }

    manipulationHTML()

}

function manipulationHTML () {
    let contentContainer = document.getElementById("contents");

    contentContainer.innerHTML = ''

    for(let i = 0; i < blogs.length; i++) {
        contentContainer.innerHTML += `
                                        <div class="blog-list-item">
                                        <div class="blog-image">
                                            <img src="${blogs[i].image}" alt="" />
                                        </div>
                                        <div class="blog-content">
                                            <div class="btn-group">
                                            <button class="btn-edit">Edit Post</button>
                                            <button class="btn-post">Post Blog</button>
                                            </div>
                                            <h1>
                                            <a href="blog-detail.html" target="_blank"
                                                >${blogs[i].title}</a
                                            >
                                            </h1>
                                            <div class="detail-blog-content">
                                            ${getFullTime(blogs[i].postAt)} | ${blogs[i].author}
                                            </div>
                                            <p> ${blogs[i].content}</p>
                                        <div style="text-align:right; font-size:15px; color:grey; margin: 5px"> ${getDistanceTime(blogs[i].postAt)}</div>
                                        </div>
                                        </div>
                                     `
    }
}

let month = ["January","February","March","April","May","June","July","August","September","October","November","December"]

function getFullTime (time){
    let date = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hours = time.getHours()
    let minute = time.getMinutes()

    let result = `${date} ${month[monthIndex]} ${year} ${hours}:${minute} WITA`
    return result
}

function getDistanceTime (time){
    let timePost = time
    let timeNow = new Date ()

    let distanceTime = timeNow - timePost
    
    let milisecond = 1000;
    let secondInMinute = 60;
    let minutesInHour = 60;
    let hoursInDay = 23;

    let distanceDays = Math.floor(distanceTime / (milisecond*secondInMinute*minutesInHour*hoursInDay))

    if(distanceDays >= 1){
        return (`${distanceDays} Days ago`)
    }else{
        let distanceHours = Math.floor(distanceTime / (milisecond*secondInMinute*minutesInHour))
        if(distanceHours >=1){
            return (`${distanceHours} Hours ago`)
        }else{
            let distanceMinutes = Math.floor(distanceTime / (milisecond*secondInMinute))
            if(distanceMinutes >=1){
                return (`${distanceMinutes} Minutes ago`)
            }else{
                let distanceSeconds = Math.floor(distanceTime / milisecond)
                return (`${distanceSeconds} Seconds ago`)
            }
        }
    
    }
}

setInterval(()=>{
    manipulationHTML()
},3000)



