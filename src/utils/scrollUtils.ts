export const handleScroll = (setActiveLink: (link: string) => void) => {
  const mainSection = document.getElementById('main');
  const skillsSection = document.getElementById('skills');
  const projectsSection = document.getElementById('projects');
  const contactsSection = document.getElementById('contacts');

  const scrollOffset = 10;

  if (
    mainSection &&
    typeof window.scrollY !== 'undefined' &&
    window.scrollY >= mainSection.offsetTop &&
    skillsSection &&
    typeof skillsSection.offsetTop !== 'undefined' &&
    window.scrollY < skillsSection.offsetTop - scrollOffset
  ) {
    setActiveLink('main');
  } else if (
    skillsSection &&
    typeof window.scrollY !== 'undefined' &&
    window.scrollY >= skillsSection.offsetTop &&
    projectsSection &&
    typeof projectsSection.offsetTop !== 'undefined' &&
    window.scrollY < projectsSection.offsetTop - scrollOffset
  ) {
    setActiveLink('skills');
  } else if (
    projectsSection &&
    typeof window.scrollY !== 'undefined' &&
    window.scrollY >= projectsSection.offsetTop &&
    contactsSection &&
    typeof contactsSection.offsetTop !== 'undefined' &&
    window.scrollY < contactsSection.offsetTop - scrollOffset
  ) {
    setActiveLink('projects');
  } else if (
    contactsSection &&
    typeof window.scrollY !== 'undefined' &&
    window.scrollY >= contactsSection.offsetTop - scrollOffset
  ) {
    setActiveLink('contacts');
  }
};
