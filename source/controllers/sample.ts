import { NextFunction, Request, Response } from "express";

const serverHealthCheck = (req: Request, res: Response, next: NextFunction) => {
  return res.status(200).json({
    message: "pong",
  });
};

const getAllMovies = (req: Request, res: Response, next: NextFunction) => {
  const movies = [{ id: 1, name: "Mission: Impossible" }];
  return res.status(200).json({ movies });
};

const getOneMovie = (req: Request, res: Response, next: NextFunction) => {
  const movies = [{ id: "1", name: "Mission: Impossible" }];
  let { id } = req.params;
  const movie = movies.find((movie) => movie.id === id);
  return res.status(200).json({ movie });
};

const getAllCastMembers = (req: Request, res: Response, next: NextFunction) => {
  const castMembers = [
    {
      id: "1",
      name: "Tom Cruise",
      character: "Ethan Hunt",
      appearedIn: ["Mission: Impossible", "Mission: Impossible 2"],
    },
    {
      id: "2",
      name: "Jon Voight",
      character: "Jim Phelps",
      appearedIn: ["Mission: Impossible"],
    },
  ];
  return res.status(200).json({ castMembers });
};

const getOneCastMember = (req: Request, res: Response, next: NextFunction) => {
  const castMembers = [
    {
      id: "1",
      name: "Tom Cruise",
      character: "Ethan Hunt",
      appearedIn: ["Mission: Impossible", "Mission: Impossible 2"],
    },
    {
      id: "2",
      name: "Jon Voight",
      character: "Jim Phelps",
      appearedIn: ["Mission: Impossible"],
    },
  ];
  let { name } = req.params;
  const castMember = castMembers.find((cast) => cast.name === name);
  return res.status(200).json({ castMember });
};

const getRandomTeam = (req: Request, res: Response, next: NextFunction) => {
  const castMembers = [
    {
      id: "1",
      name: "Tom Cruise",
      character: "Ethan Hunt",
      appearedIn: ["Mission: Impossible", "Mission: Impossible 2"],
    },
    {
      id: "2",
      name: "Jon Voight",
      character: "Jim Phelps",
      appearedIn: ["Mission: Impossible"],
    },
  ];

  return res.status(200).json({ castMembers });
};

export default {
  serverHealthCheck,
  getAllMovies,
  getOneMovie,
  getAllCastMembers,
  getOneCastMember,
  getRandomTeam,
};
