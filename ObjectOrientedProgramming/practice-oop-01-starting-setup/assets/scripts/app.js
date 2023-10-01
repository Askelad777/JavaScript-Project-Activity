class DOMHelper{

  static clearEventListeners(element){
    // Deleting the old task and place it to a new section
    // Cloning the node before transfering or deleting the orignal node.
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }
  static moveElement(elementId, newDestinationSelector){

    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);

  }
}
class ToolTip{}





class ProjectItem{
  constructor(id, updateProjectListFunction, type){
    this.id = id;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  connectMoreInfoButton(){}

  connectSwitchButton(type){

    // Accessing the this.id 
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener('click', this.updateProjectListHandler.bind(null, this.id))
  }
  
  update(updateProjectListFn, type){
    this.updateProjectListHandler = updateProjectListFn;
    this.connectSwitchButton(type);

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
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
        );
    }
    console.log(this.projects);
    
  }

  setSwitchHandlerFunction(switchHandlerFunction){
    // pointer to the switchHandlerFunction. 
     this.switchHandler = switchHandlerFunction;

  }


  addProject(project){
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    console.log(this);
    project.update(this.switchProject.bind(this), this.type);
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