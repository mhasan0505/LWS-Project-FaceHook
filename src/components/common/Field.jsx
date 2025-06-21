import React from 'react'

export default function Field({label, children, htmlFor, error}) {
    // Destructure props to get label, children, htmlFor, and error

    const id = htmlFor || getChildId(children);
  return (
    <div className="form-control">
{
        label && (
            <label className="auth-label" htmlFor={id}>
            {label}
            </label>
        )
        }
        {children}
        {
            error && (
            <p className="text-red-500 text-xs mt-1">
                {error.message}
            </p>
            )
}

    </div>
  )
}

const getChildId = (children) => {
    const childArray = React.Children.toArray(children);
    if (childArray.length === 0) return undefined;
    const child = childArray[0];
    if (child && child.props && 'id' in child.props) {
        return child.props.id;
    }
    return undefined;
}
