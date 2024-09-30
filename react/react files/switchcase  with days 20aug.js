
import ReactDom from 'react-dom/client'
let obj=new Date()
let d=obj.getDay()
let result
switch(d){
    case 0:
        result="sunday"
        break;
        case 1:
            result="monday"
            break;
            case 2:
                result="tuesday"
                break;
                case 3:
                    result="wendsday"
                    break;
                    case 4:
                        result="thursday"
                        break;
                        case 5:
                            result="friday"
                            break;
                            case 6:
                               result="saturday"
                                    break; 
}

const root = ReactDom.createRoot(document.getElementById('root'));
root.render(
    <>
     <h1>{result}</h1>
    </>
);