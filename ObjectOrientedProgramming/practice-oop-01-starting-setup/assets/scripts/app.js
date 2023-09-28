class ToolTip{}





class ProjectItem{
  constructor(id, updateProjectListFunction){
    this.id = id;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton();
  }

  connectMoreInfoButton(){}

  connectSwitchButton(){

    // Accessing the this.id 
    const projectItemElement = document.getElementById(this.id);
    const switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn.addEventListener('click', this.updateProjectListHandler)
  }
}






class ProjectList{

  projects = [];

  constructor(type){
    this.type = type;
    //  prjItems variable key accessing DOM elements using queryselectorAll.
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    // Fetch project item from the DOM to get information
    for(const prjItem of prjItems){
      // accessing the specific Id of the dom Node
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this))
        );
    }
    console.log(this.projects);
    
  }

  setSwitchHandlerFunction(switchHandlerFunction){
    // pointer to the switchHandlerFunction. 
     this.switchHandler = switchHandlerFunction;

  }


  addProject(){
    console.log(this);
  }
  switchProject(prodjectId){
    // const projectIndex = this.projects.indexOf(p => p.id === prodjectId);
    // this.projects.splice(projectIndex, 1);

    this.switchHandler(this.projects.find(p => p.id === prodjectId));
    // removing a specific projec
    this.projects = this.projects.filter(p => p.id !== prodjectId);
  }
}











class App {
  static init(){
    // Instatiation for Projectlist. Accessing the 2 section in HTML elements.
    const activeProjectsList = new ProjectList('active'); 
    const finishedProjectsList = new ProjectList('finished');

    activeProjectsList.setSwitchHandlerFunction(finishedProjectsList.addProject.bind(finishedProjectsList));

     finishedProjectsList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));

  }
}

App.init();