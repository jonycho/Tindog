class Animal {
    constructor(data){
        Object.assign(this,data)
    }
    getDogInfoHtml(){
        const {name,avatar,age,bio} = this
        return ` <div class="container-img">
                    <img class="img-dog" src="${avatar}" />
                    <div class="text-image">
                        <h2>${name}, ${age}</h2>
                        <p>${bio}</p>
                    </div>
                </div>`
    }
    getLikeHtml(){
        this.hasBeenSwiped = true
        this.hasBeenLiked = true
        return `<div id="badge">
                        <img src="images/badge-like.png" />
                    </div>`
    }
    getNopeHtml(){
        this.hasBeenSwiped = true
        return `<div id="badge">
                        <img src="images/badge-nope.png" />
                    </div>`
    }
}

export default Animal