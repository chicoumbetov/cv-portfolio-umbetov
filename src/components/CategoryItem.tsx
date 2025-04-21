import { FaGithub } from "react-icons/fa";
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
  padding: 5px;
  height: 100%;
  width: 100%;
  object-fit: cover;
  box-shadow: 5px 5px 5px 0 #b5b5b5 inset, -5px -5px 5px 0 #ffffff inset;
`;

const ProjectCard = styled.div`
  display: flex;
  box-shadow: 0 3px 20px #3c3c3b26;
  border: solid 1px white;
  border-radius: 20px;
  flex-direction: column;
  padding: 0px;
  height: 100%;
`;

const ProjectCardMedia = styled.div`
  height: 400px;
  overflow: hidden;
`;

const ProjectCardInformation = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 250px;

  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 15px;
  color: black;
  margin-bottom: 0px;
  background-color: white;
  padding: 3px;
  border-radius: 10px;
  text-align: center;
`;

const Technologies = styled.h4`
  font-size: 11px;
  color: black;
  margin-top: 5px;
  margin-bottom: 0px;
  background-color: white;
  padding: 3px;
  border-radius: 10px;
  text-align: center;

  border: solid 0.5px black;
`;

const Button = styled.button`
  border: none;
  padding: 5px;
  background-color: white;
  color: black;
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
    description?: string;
    projectLink?: string;
    backendLink?: string;
    screenshots: (string | undefined)[];
    githubLink?: string;
    usedTechno?: string;
  };
  darkMode?: boolean;
};

const CategoryItem = ({ item, darkMode }: CategoryItemProps) => {
  return (
    <ProjectCardContainer className="col-12 col-lg-4">
      <ProjectCard>
        <ProjectCardMedia>
          <Carousel autoPlay showThumbs={false} infiniteLoop showArrows={true}>
            {[item.img, ...item.screenshots].map(
              (src, index) =>
                src && (
                  <div key={index}>
                    <ProjectCardImage
                      className={``}
                      src={src}
                      alt={`Slide ${index}`}
                    />
                  </div>
                )
            )}
          </Carousel>
        </ProjectCardMedia>
        <ProjectCardInformation>
          <div>
            <Title>{item.title}</Title>
            {/*item?.description && (
              <Description>{item?.description}</Description>
            )*/}
            <Technologies>Technologies: {item.usedTechno}</Technologies>
          </div>

          <div className="flex justify-between">
            {item.githubLink && (
              <div className="socials">
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`ico-circle border-1 rounded-full justify-center text-center align-center ${
                    darkMode
                      ? "text-white bg-black border-white"
                      : "text-black bg-white border-black"
                  }`}
                >
                  <FaGithub
                    className={`rounded-full self-center ${
                      darkMode ? "text-white bg-black" : "text-black bg-white"
                    }`}
                  />
                </a>
              </div>
            )}
            {item.projectLink && (
              <a
                href={item.projectLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Live Demo</Button>
              </a>
            )}
            {item.backendLink && (
              <a
                href={item.backendLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>Back - End</Button>
              </a>
            )}
          </div>
        </ProjectCardInformation>
      </ProjectCard>
    </ProjectCardContainer>
  );
};

export default CategoryItem;
