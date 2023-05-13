# ToDo App

## Data layer

### Data

- Collection of robots
  - robot:
    - img: string
    - name: string
    - speed: number
    - resistance: number
    - creationDate: number

### Modifications

- addToDo(robot)
- removeToDo(id)
- loadToDos(api)
- toggleToDo()

## Components

### Store

#### State

- Collection of robots

#### ToDosReducer

- addToDo()
- removeToDo(id)
- loadToDos()
- toggleToDo()

### App

- Receives an external collection of robots
- Receives a collection of robots
- Receives dispatch()
- Shows the title of the app inside a heading
- Renders a RobotsForm
- Renders a RobotsList component

### RobotsForm

- State:
  - robots
- handleSubmit()
- Receives dispatch()
- Receives an optional robot to update
- Shows an input text for the name of the robot
- Renders a Button component
  - text: "create" / "modify"
  - actionOnClick: handleSubmit

### RobotsList

- Receives a collection of robots
- Renders as many RobotCard as robots are in the collection

### RobotCard

- Receives a robot
- Receives dispatch()
- handleClick()
- Shows the robot's name inside a heading
- Shows a checklike button when the received robot is liked
- Renders a Button with:
  - text: "delete"
  - actionOnClick: handleClick

### Button

- Receives a text
- Receives an action on click
- Shows a button with the received text
- Calls the received action when the button is clicked
