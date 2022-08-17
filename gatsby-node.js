exports.createPages = async ({ actions, graphql, reporter }) => {
	const resultado = await graphql(`
		query {
			allDatoCmsBedroom {
				nodes {
					slug
				}
			}
		}
	`)

	if (resultado.errors) {
		reporter.panic(`Error while running GraphQL query.`)
		return
	}
	
	const habitaciones = resultado.data.allDatoCmsBedroom.nodes
	habitaciones.forEach(habitacion => {
		actions.createPage({
			path: habitacion.slug,
			component: require.resolve('./src/pages/habitaciones.js'),
			context: {
				slug: habitacion.slug
			}
		})
	})
}
