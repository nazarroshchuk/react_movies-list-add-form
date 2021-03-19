(this["webpackJsonpreact_movies-list-add-form"]=this["webpackJsonpreact_movies-list-add-form"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"title":"Inception","description":"Follows the lives of eight very different couples in dealing with their love lives in various loosely interrelated tales all set during a frantic month before Christmas in London, England.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg","imdbUrl":"https://www.imdb.com/title/tt1375666","imdbId":"tt1375666"},{"title":"Love Actually","description":"A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4NjQ5NDc0Nl5BMl5BanBnXkFtZTYwNjk5NDM3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0314331","imdbId":"tt0314331"},{"title":"The Day After Tomorrow","description":"Jack Hall, paleoclimatologist, must make a daring trek from Washington, D.C. to New York City to reach his son, trapped in the cross-hairs of a sudden international storm which plunges the planet into a new Ice Age.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTY4YWMzMTMtZjUyOS00OGY1LTljMGUtOWU5ZjYzMjc2ZTMwXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_SY1000_CR0,0,701,1000_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt0319262","imdbId":"tt0319262"},{"title":"Rogue One","description":"The daughter of an Imperial scientist joins the Rebel Alliance in a risky move to steal the Death Star plans.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMjEwMzMxODIzOV5BMl5BanBnXkFtZTgwNzg3OTAzMDI@._V1_SY1000_SX675_AL_.jpg","imdbUrl":"https://www.imdb.com/title/tt3748528","imdbId":"tt3748528"},{"title":"The Holiday","description":"Two women troubled with guy-problems swap homes in each other\'s countries, where they each meet a local guy and fall in love.","imgUrl":"https://m.media-amazon.com/images/M/MV5BMTI1MDk4MzA2OF5BMl5BanBnXkFtZTYwMjQ3NDc3._V1_.jpg","imdbUrl":"https://www.imdb.com/title/tt0457939","imdbId":"tt0457939"}]')},,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var i=a(0),r=a.n(i),l=a(7),n=a.n(l),m=(a(15),a(9)),s=a(1),o=a(2),d=a(4),c=a(3),u=(a(16),a(17),a(18),function(e){var t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-image"},r.a.createElement("figure",{className:"image is-4by3"},r.a.createElement("img",{src:i,alt:"Film logo"}))),r.a.createElement("div",{className:"card-content"},r.a.createElement("div",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-48x48"},r.a.createElement("img",{src:"images/imdb-logo.jpeg",alt:"imdb"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("p",{className:"title is-8"},t))),r.a.createElement("div",{className:"content"},a,r.a.createElement("br",null),r.a.createElement("a",{href:l},"IMDB"))))});u.defaultProps={description:""};var g=function(e){var t=e.movies;return r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(u,Object.assign({key:e.imdbId},e))})))};g.defaultProps={movies:[]};var b=a(5),p=(a(19),function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={addedMovie:{},title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:"",errorMessage:"",titleDirty:!1,imgUrlDirty:!1,imdbUrlDirty:!1,imdbIdDirty:!1},e.onChangeHandler=function(t){var a,i=t.target,r=i.name,l=i.value,n="".concat(r,"Dirty");e.setState((a={},Object(b.a)(a,r,l),Object(b.a)(a,n,!1),Object(b.a)(a,"submitMessage",!1),a))},e.blurHandler=function(t){if(!t.target.value)switch(t.target.name){case"title":e.setState({titleDirty:!0,errorMessage:"Title value is invalid"});break;case"imgUrl":e.setState({imgUrlDirty:!0,errorMessage:"ImgUrl value is invalid"});break;case"imdbUrl":e.setState({imdbUrlDirty:!0,errorMessage:"ImdbUrl value is invalid"});break;case"imdbId":e.setState({imdbIdDirty:!0,errorMessage:"ImdbId value is invalid"})}},e.onSubmitHandler=function(t){if(t.preventDefault(),!e.state.title||!e.state.title.replace(/ /g,"")||!e.state.imgUrl||!e.state.imgUrl.replace(/ /g,"")||!e.state.imdbUrl||!e.state.imdbUrl.replace(/ /g,"")||!e.state.imdbId||!e.state.imdbId.replace(/ /g,""))return e.setState({submitMessage:!0}),void e.clearForm();e.setState((function(e){return{addedMovie:{title:e.title,description:e.description,imgUrl:e.imgUrl,imdbUrl:e.imdbUrl,imdbId:e.imdbId,submitMessage:!1}}}))},e}return Object(o.a)(a,[{key:"componentDidUpdate",value:function(e,t,a){t.addedMovie!==this.state.addedMovie&&(this.props.addMovie(this.state.addedMovie),this.clearForm())}},{key:"clearForm",value:function(){this.setState({title:"",description:"",imgUrl:"",imdbUrl:"",imdbId:""})}},{key:"render",value:function(){var e=this.state,t=e.title,a=e.description,i=e.imgUrl,l=e.imdbUrl,n=e.imdbId,m=e.errorMessage,s=e.titleDirty,o=e.imgUrlDirty,d=e.imdbUrlDirty,c=e.imdbIdDirty,u=!0;return t&&i&&l&&n||(u=!1),r.a.createElement("form",{className:"form-style-7",onSubmit:this.onSubmitHandler},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"title"},"Title"),r.a.createElement("input",{name:"title",type:"text",value:t,onChange:this.onChangeHandler,onBlur:this.blurHandler,id:"title",required:"true"}),s&&m&&r.a.createElement("span",{style:{color:"red"}},m)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"description"},"Description"),r.a.createElement("input",{name:"description",type:"text",value:a,onChange:this.onChangeHandler,id:"description"})),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"imgUrl"},"ImgUrl"),r.a.createElement("input",{name:"imgUrl",type:"text",value:i,onChange:this.onChangeHandler,onBlur:this.blurHandler,id:"imgUrl",required:"true",pattern:"/^((([A-Za-z]{3,9}:(?:\\\\/\\\\/)?)(?: [-;:&=+\\$,\\\\w]+@)?[A-Za-z0-9.-]+| (?:www\\\\.|[-;:&=+\\$,\\\\w]+@)[A-Za-z0-9.-]+) ((?:\\\\/[+~%/.\\\\w-_]*)?\\\\??(?: [-+=&;%@.\\\\w_]*)#?(?:[.!/\\\\\\\\\\\\w]*))?)\\$/"}),o&&m&&r.a.createElement("span",{style:{color:"red"}},m)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"imdbUrl"},"ImdbUrl"),r.a.createElement("input",{name:"imdbUrl",type:"text",value:l,onChange:this.onChangeHandler,onBlur:this.blurHandler,id:"imdbUrl",required:"true",pattern:"/^((([A-Za-z]{3,9}:(?:\\\\/\\\\/)?)(?: [-;:&=+\\$,\\\\w]+@)?[A-Za-z0-9.-]+| (?:www\\\\.|[-;:&=+\\$,\\\\w]+@)[A-Za-z0-9.-]+) ((?:\\\\/[+~%/.\\\\w-_]*)?\\\\??(?: [-+=&;%@.\\\\w_]*)#?(?:[.!/\\\\\\\\\\\\w]*))?)\\$/"}),d&&m&&r.a.createElement("span",{style:{color:"red"}},m)),r.a.createElement("li",null,r.a.createElement("label",{htmlFor:"imdbId"},"ImdbId"),r.a.createElement("input",{name:"imdbId",type:"text",value:n,onChange:this.onChangeHandler,onBlur:this.blurHandler,id:"imdbId",required:"true"}),m&&c&&r.a.createElement("span",{style:{color:"red"}},m)),r.a.createElement("li",null,this.state.submitMessage&&r.a.createElement("p",{style:{color:"red",padding:"10px"}},"All inputs must must contain characters"),r.a.createElement("button",{type:"submit",disabled:!u},"Add Movie"))))}}]),a}(i.Component)),h=a(8),v=function(e){Object(d.a)(a,e);var t=Object(c.a)(a);function a(){var e;Object(s.a)(this,a);for(var i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={movies:h},e.addMovie=function(t){e.setState((function(e){return{movies:[].concat(Object(m.a)(e.movies),[t])}}))},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this.state.movies;return r.a.createElement("div",{className:"page"},r.a.createElement("div",{className:"page-content"},r.a.createElement(g,{movies:e})),r.a.createElement("div",{className:"sidebar"},r.a.createElement(p,{addMovie:this.addMovie})))}}]),a}(i.Component);n.a.render(r.a.createElement(v,null),document.getElementById("root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.7418ed02.chunk.js.map