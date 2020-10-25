import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const ProtectedRoute = ({component: Component, validatorFunction:validatorFunction, ...rest}) =>{
    return (
        <Route {...rest} 
        render={
            props =>{
                if(validatorFunction===true){
                    return <Component {...props} />;
                }
                else{
                    return <Redirect to={{
                        pathname:'/',
                        state:{
                            from: props.location
                        }
                    }}/>
                }
                
            }
        }
        />
    )
}
export default ProtectedRoute