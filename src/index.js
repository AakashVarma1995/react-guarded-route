import React from 'react'
import { Route, Redirect } from 'react-router-dom'
const GuardedRoute = ({component: Component, validatorFunction:validatorFunction, ...rest}) =>{
    return (
        <Route {...rest} 
        render={
            props =>{
                if(validatorFunction){
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

export default GuardedRoute;