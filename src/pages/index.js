import React from 'react'
import { css } from '@emotion/react'
import { ImagenHotel, ContenidoInicio, Layout, BedroomPreview } from '../components'
import useHabitaciones from '../hooks/useHabitaciones'
import styled from '@emotion/styled'

const List = styled.div`
	margin: 4rem auto 0 auto;
	list-style: none;
	width: 95%;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	column-gap: 3rem;
`

const IndexPage = () => {

	const habitaciones = useHabitaciones()

	console.log(habitaciones)

	return (
		<Layout>	
			<ImagenHotel />
			<ContenidoInicio />
			<div
				css={css`
					max-width: 1400px;
					margin: 0 auto;
				`}
			>
				<h2
					css={css`
						text-align: center;
						margin-top: 4rem;
						font-size: 4rem;
					`}
				>Habitaciones</h2>
				<List>
					{habitaciones.map(habitacion => (
						<BedroomPreview 
							key={habitacion.id} 
							habitacion={habitacion} 
						/>
					))}
				</List>
			</div>
		</Layout>
	)
}

export default IndexPage