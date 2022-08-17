import { graphql, useStaticQuery } from "gatsby";

const useHabitaciones = () => {
    const { allDatoCmsBedroom } = useStaticQuery(graphql`
        query {
            allDatoCmsBedroom {
                nodes {
                    id
                    slug
                    title
                    content
                    image {
                        fluid(maxWidth: 1200) {
                            ...GatsbyDatoCmsFluid
                        }
                    }
                }
            }
        }
    `);
    
    return allDatoCmsBedroom.nodes.map(habitacion => ({
        title: habitacion.title,
        content: habitacion.content,
        image: habitacion.image,
        slug: habitacion.slug,
        id: habitacion.id
    }));
}

export default useHabitaciones;