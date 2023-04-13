




export interface Segment extends React.HTMLAttributes<HTMLElement> {
    options?: any[]; 
    className?: string;   
}

declare function Segment(props: Segment): JSX.Element;

export default Segment;