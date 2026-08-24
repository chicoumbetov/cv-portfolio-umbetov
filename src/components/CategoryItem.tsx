import { useTranslation } from "react-i18next";
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
  padding: 15px;
  height: 270px;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  color: black;
  margin-bottom: 8px;
  background-color: white;
  padding: 5px;
  border-radius: 10px;
  text-align: center;
`;

const Description = styled.p`
  font-size: 12px;
  color: #4b5563;
  margin-bottom: 8px;
  text-align: center;
  line-height: 1.4;
`;

const Technologies = styled.h4`
  font-size: 11px;
  color: black;
  margin-top: 5px;
  margin-bottom: 10px;
  background-color: white;
  padding: 4px;
  border-radius: 10px;
  text-align: center;
  border: solid 0.5px black;
`;

const Button = styled.button`
  border: none;
  padding: 6px 12px;
  background-color: white;
  color: black;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  transition: background-color 0.2s;

  &:hover {
    background-color: #f3f4f6;
  }
`;

type CategoryItemProps = {
  item: {
    id: number | string;
    img?: string;
    title: string;
    description?: string;
    projectLink?: string;
    backendLink?: string;
    screenshots?: (string | undefined)[]; // Marked as optional here
    githubLink?: string;
    githubBack?: string;
    usedTechno?: string;
  };
  darkMode?: boolean;
};

const CategoryItem = ({ item, darkMode }: CategoryItemProps) => {
  const { t } = useTranslation();
  // Ensure screenshots defaults to an empty array if undefined
  const screenshots = item.screenshots || [];

  return (
    <ProjectCardContainer className="col-12 col-lg-4">
      <ProjectCard>
        {item.img && (
          <ProjectCardMedia>
            <Carousel autoPlay showThumbs={false} infiniteLoop showArrows={true}>
              {[item.img, ...screenshots].map(
                (src, index) =>
                  src && (
                    <div key={index}>
                      <ProjectCardImage
                        src={src}
                        alt={`Slide ${index}`}
                      />
                    </div>
                  )
              )}
            </Carousel>
          </ProjectCardMedia>
        )}
        <ProjectCardInformation>
          <div>
            <Title>{item.title}</Title>
            {item?.description && (
              <Description>{item.description}</Description>
            )}
            <Technologies>{t("projects.technologies", "Technologies")}: {item.usedTechno}</Technologies>
          </div>

          <div className="flex justify-between items-center mt-2">
            {item.githubLink && (
              <div className="socials">
                <a
                  href={item.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Repository"
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
                <Button>{t("projects.liveDemo", "Live Demo")}</Button>
              </a>
            )}
            {item.backendLink && (
              <a
                href={item.backendLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button>{t("projects.backendLive", "Back - End Live")}</Button>
              </a>
            )}
            {item.githubBack && (
              <div className="socials">
                <a
                  href={item.githubBack}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Backend GitHub Repository"
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
          </div>
        </ProjectCardInformation>
      </ProjectCard>
    </ProjectCardContainer>
  );
};

export default CategoryItem;
