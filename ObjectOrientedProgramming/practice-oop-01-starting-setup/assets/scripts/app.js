class Tooltip{}

class ProjectItem{
  constructor(id){
    this.id = id;
    this.connectMoreInfoButton();
    this.connectSwitchButton();  
  }


  connectMoreInfoButton(){}
  connectSwitchButton(){
    const projectItemELement = document.getElementById(this.id);
    const switchBtn = projectItemELement.querySelector('button:last-of-type');

    switchBtn.addEventListener('click', )
  }
}

class ProjectList{
  projects = [];
  constructor(type){
    const projectItems = document.querySelectorAll(`#${type}-projects li`);
    for(const prjItem of projectItems){
      this.projects.push(new ProjectItem(prjItem.id));      
    }
  }
}

class App{
  static init(){
    const activeProjectList = new ProjectList('active');
    const finishedProjectList = new ProjectList('finished');

  }
}

App.init();