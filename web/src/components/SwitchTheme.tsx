import React, { useContext } from 'react'
import Switch from 'react-switch'
import { ThemeContext } from 'styled-components'
import { shade } from 'polished'

interface Props {
  toggleTheme(): void 
}

const SwitchTheme: React.FC<Props> = ({ toggleTheme }) => {
  const { title, colors } = useContext(ThemeContext)

  return (
    <div className="switch-theme">
      <Switch 
        onChange={toggleTheme}
        checked={title === 'light'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={15}
        width={40}
        handleDiameter={15}
        onColor={colors.button}
        offColor={shade(0.15, colors.secundaryButton)}
      />
    </div>
  )
}

export default SwitchTheme