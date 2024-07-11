import './Scrollbar.scss';

import React from 'react';
import ssb from 'smooth-scrollbar';


type Props = {
  update?: boolean
  className?: string
  bottom?: boolean
};


export default class Scrollbar extends React.Component<Props> {
  readonly scrollRef: React.RefObject<HTMLDivElement> = React.createRef();
  private scrollbar: any;

  componentDidMount(): void {
    const options = {
      damping: 0.1,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: false
    };

    if (this.scrollRef.current) this.scrollbar = ssb.init(this.scrollRef.current, options);

    if (this.props.bottom) {
      this.scrollbar.scrollTop = this.scrollbar.limit.y;
    }
  }
  componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>, snapshot?: any): void {
    if (this.scrollbar) {
      this.scrollbar.update();

      if (this.props.bottom) {
        this.scrollbar.scrollTo(0, this.scrollbar.limit.y, 200)
      }
    }
  }
  componentWillUnmount(): void {
    if (this.scrollbar) this.scrollbar.destroy();
  }

  render() {
    return (
      <div ref={this.scrollRef} className={'scrollbar' + (this.props.className ? ` ${this.props.className}` : '')}>
        {this.props.children}
      </div>
    )
  }
}