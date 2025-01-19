import React from 'react'

export const Container = (props:any) => {
  return (
    <div style={{padding:'20px', background:props?.bg}}>{props?.children}</div>
  )
}
