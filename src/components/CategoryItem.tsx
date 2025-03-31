import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const ProjectCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 32px;
  height: 100%;
`;

const ProjectCardImage = styled.img`
  border-radius: 20px 20px 0 0;
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

const ProjectCard = styled.div`
  display: flex;
  box-shadow: 0 3px 20px #3c3c3b26;
  border-radius: 20px;
  flex-direction: column;
  padding: 0;
  height: 100%;
`;

const ProjectCardMedia = styled.div`
  height: 400px;
  overflow: hidden;
`;

const ProjectCardInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 28px;
  height: 250px;
`;

const Title = styled.h1`
  font-size: 20px;
  color: black;
  margin-bottom: 0px;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
`;

const Button = styled.button`
  border: none;
  padding: 5px;
  background-color: white;
  color: black;
  width: 100%;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  border-radius: 10px;
`;

type CategoryItemProps = {
  item: {
    id: number;
    img: string;
    title: string;
    projectLink?: string;
    backendLink?: string;
    screenshots: (string | undefined)[];
    githubLink?: string;
    usedTechno?: string;
  };
};

const CategoryItem = ({ item }: CategoryItemProps) => {
  return (
    <ProjectCardContainer className="col-12 col-lg-4">
      <ProjectCard>
        <ProjectCardMedia>
          <Carousel showThumbs={false} infiniteLoop showArrows={true}>
            {[item.img, ...item.screenshots].map(
              (src, index) =>
                src && (
                  <div key={index}>
                    <ProjectCardImage src={src} alt={`Slide ${index}`} />
                  </div>
                )
            )}
          </Carousel>
        </ProjectCardMedia>
        <ProjectCardInformation>
          <Title>{item.title}</Title>
          <p>Technologies: {item.usedTechno}</p>
          {item.projectLink && (
            <a
              href={item.projectLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Project link</Button>
            </a>
          )}
          {item.githubLink && (
            <a href={item.githubLink} target="_blank" rel="noopener noreferrer">
              <Button>Github code link</Button>
            </a>
          )}
          {item.backendLink && (
            <a
              href={item.backendLink}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button>Back - End link</Button>
            </a>
          )}
        </ProjectCardInformation>
      </ProjectCard>
    </ProjectCardContainer>
  );
};

export default CategoryItem;
