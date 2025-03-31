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

const CategoryItem = (item: CategoryItemProps) => {
  return (
    <ProjectCardContainer className="col-12 col-lg-4">
      <ProjectCard>
        <ProjectCardMedia>
          <div className={"project-card-image"}>
            <a href={item.item.img} data-lightbox="gallery-vmarine">
              <ProjectCardImage src={item?.item.img} />
            </a>
            {item &&
              item.item &&
              item.item.screenshots &&
              item.item.screenshots.map((each) => (
                <a
                  href={each}
                  data-lightbox="gallery-vmarine"
                  style={{ display: "none" }}
                >
                  jsx-a11y/anchor-has-content warning
                </a>
              ))}
          </div>
        </ProjectCardMedia>
        <ProjectCardInformation>
          <Title>{item.item.title}</Title>
          <p>Technologies: {item.item.usedTechno}</p>
          <a href={item.item.projectLink}>
            <Button onClick={() => {}}>Project link</Button>
          </a>
          {item.item.githubLink && (
            <a href={item.item.githubLink}>
              <Button onClick={() => {}}>Github code link</Button>
            </a>
          )}
          {item.item.backendLink && (
            <a href={item.item.backendLink}>
              <Button onClick={() => {}}>Back - End link</Button>
            </a>
          )}
        </ProjectCardInformation>
      </ProjectCard>
    </ProjectCardContainer>
  );
};

export default CategoryItem;
