type DataObject = {
  x: string | number;
  y: number;
};

type DiaryData = {
  id: string;
  data: DataObject[];
}[];

type Diary = {
  top: number;
  bottom: number;
  data: {
    id: string;
    data: DataObject[];
  }[];
};

type Meal = {
  img: string;
  desc: string;
};

type Progress = {
  date: string;
  percent: number;
};

type DiaryRecord = {
  date: string;
  time: string;
  title: string;
  desc: string;
};

type Exercise = {
  name: string;
  time: string;
  calories: string;
};

type Exercises = {
  date: string;
  details: ExerciseDetail[];
};

type RecordData = {
  imageSrc: string;
  title: string;
  subtitle: string;
};

type Category = {
  name: string;
  category: string;
};

type New = {
  image: string;
  date: string;
  desc: string;
  tags: string[];
};
