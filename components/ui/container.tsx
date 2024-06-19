type ContainerProps = {
    children: React.ReactNode
}

const Container = ({children}: ContainerProps) => {
    return ( <div className={'mx-auto max-w-7xl px-5 md:px-3 h-full'}>
        {children}
    </div> );
}
 
export default Container;