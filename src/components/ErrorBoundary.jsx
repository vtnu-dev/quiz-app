class ErrorBoundary extends React.Component {
  state = { hasError: false }
  
  static getDerivedStateFromError(error) {
    return { hasError: true }
  }
  
  render() {
    if (this.state.hasError) {
      return <h1>Что-то пошло не так. Попробуйте перезагрузить страницу.</h1>
    }
    return this.props.children
  }
} 