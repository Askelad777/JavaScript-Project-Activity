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
    element.scrollIntoView({behavior: 'smooth'}); // Smooth view scrolling 
    
  }
}

class Component{
  constructor(hostElementId, insertBefore = false){
    if(hostElementId){
      this.hostElement = document.getElementById(hostElementId);
    }else{
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  remove() {
    if(this.element){
      this.element.remove();
    }
    
  }
  show(){
    this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin' : 'beforeend', this.element);
    
  }
  
}
class ToolTip extends Component{
  constructor(closeNotifierFunction, Text, hostElementId){
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.Text = Text;
    this.create();
  }
  closeTooltip = () =>{
    this.remove();
    this.closeNotifier();
  }
  create(){
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    const tooltipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.text;
    tooltipElement.append(tooltipBody);

    const hostElementPosLeft = this.hostElement.offsetLeft;
    const hostElementPosTop = this.hostElement.offsetTop;
    const hostElementHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;



    const x = hostElementPosLeft + 20;
    const y = hostElementPosTop + hostElementHeight - parentElementScrolling - 10;

    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = x + 'px';
    tooltipElement.style.top = y + 'px';
    


    tooltipElement.addEventListener('click', this.closeTooltip)
    this.element = tooltipElement;
  }
}





class ProjectItem{
  hasActiveTooltip = false;


  constructor(id, updateProjectListFunction, type){
    this.id = id;
    this.updateProjectListHandler = updateProjectListFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }


  showMoreInfoHandler(){
    if(this.hasActiveTooltip){
      return;
    }

    const projectElement = document.getElementById(this.id);
    console.log(projectElement.dataset);
    const TooltipText = projectElement.dataset.extraInfo;
    // projectElement.dataset.someInfo = "test"; - Adding another attributes in the node

    const tooltip = new ToolTip(()=>{
      this.hasActiveTooltip = false;
    },TooltipText, this.id);
    tooltip.show();
    this.hasActiveTooltip = true;

  }

  connectMoreInfoButton(){
    const projectItemElement = document.getElementById(this.id);
    let moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this))
  }

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

      const timerId = setTimeout(this.startAnalytic, 3000); //3 sec timer

      document.getElementById('stop-analytics-btn').addEventListener('click', ()=>{
        clearTimeout(timerId);
      });
    }

    static startAnalytic(){
      const analyticScript = document.createElement('script');
      analyticScript.src = 'assets/scripts/analytics.js';
      analyticScript.defer = true;
      document.head.append(analyticScript);
  }
}

App.init();