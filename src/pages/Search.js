import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import SearchHeader from "../components/SearchHeader";
import SearchMainResult from "../components/SearchMainResult";
import SearchSideLayout from "../components/SearchSideLayout";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get("q");
  const [data, setData] = useState([]);
  const [url, setUrl] = useState(``);
  const [searchInput, setSearchInput] = useState(q);
  // const initialData = [
  //   {
  //     id: "JYnIqYAB_uUz9AC4paVH",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "K4nKqYAB_uUz9AC44qWi",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "MYnLqYAB_uUz9AC4ZqXq",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "N4nNqYAB_uUz9AC4IKX5",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "PYnNqYAB_uUz9AC446WW",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "Q4nPqYAB_uUz9AC4u6Ut",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "SYnRqYAB_uUz9AC4V6W1",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "VYnVqYAB_uUz9AC4sqVc",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "W4nWqYAB_uUz9AC4TqXo",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "YYndqYAB_uUz9AC4aKXO",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  // ];
  // const page1Data = [
  //   {
  //     id: "AokWqoAB_uUz9AC4Z6ZT",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "C4kaqoAB_uUz9AC4wKbA",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "FIkcqoAB_uUz9AC4j6Yb",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "HYkeqoAB_uUz9AC4a6ZY",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "JokfqoAB_uUz9AC4K6Yp",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "L4kfqoAB_uUz9AC49aYB",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "RebIrIABoF1eQjxIOL8Y",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "TubvrIABoF1eQjxIHL-p",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "XE22xoABG4HDXDJk1sdm",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  //   {
  //     id: "Yk25xoABG4HDXDJkvscK",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       "package com.ecsimsw.fastcrud;\n\nimport com.ecsimsw.fastcrud.annotation.CRUD;\nimport com.ecsimsw.fastcrud.annotation.CrudType;\n",
  //   },
  // ];
  // const page2Data = [
  //   {
  //     id: "E026xoABG4HDXDJkbcjz",
  //     language: "JAVA",
  //     path: "https://github.com/Yunkeun/spring-order-system.git",
  //     star: 0,
  //     className: "DiscountPolicy",
  //     codeLines:
  //       "package com.yoonveloping.springordersystem.discount;\n\nimport com.yoonveloping.springordersystem.member.Member;\n\n",
  //   },
  // ];
  // const classData = [
  //   {
  //     id: "DjgOtoABxlF1kxGwh2Wo",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 13,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "gzgRtoABxlF1kxGwnWXF",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 13,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "BTgOtoABxlF1kxGwh2WH",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 12,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "ejgRtoABxlF1kxGwnWWB",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 12,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "cTgRtoABxlF1kxGwnWVF",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 11,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "_DgOtoABxlF1kxGwh2Rj",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 11,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "dTjYtYABxlF1kxGwWGR1",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "fjjZtYABxlF1kxGwYmQz",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "hzgGtoABxlF1kxGwF2TE",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "kDgJtoABxlF1kxGwmWSa",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  // ];
  // const classPage3Data = [
  //   {
  //     id: "ojgOtoABxlF1kxGwhGQS",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 1,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  //   {
  //     id: "FzgRtoABxlF1kxGwl2WX",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 1,
  //     className: "TargetEntity",
  //     codeLines:
  //       'import javax.persistence.Entity;\nimport org.springframework.util.ClassUtils;\n\npublic class TargetEntity {\n\n    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n',
  //   },
  // ];
  // const varData = [
  //   {
  //     id: "DjgOtoABxlF1kxGwh2Wo",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 13,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "gzgRtoABxlF1kxGwnWXF",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 13,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "BTgOtoABxlF1kxGwh2WH",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 12,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "ejgRtoABxlF1kxGwnWWB",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 12,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "cTgRtoABxlF1kxGwnWVF",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 11,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "_DgOtoABxlF1kxGwh2Rj",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 11,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "hzgGtoABxlF1kxGwF2TE",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "kDgJtoABxlF1kxGwmWSa",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "mTgNtoABxlF1kxGwU2TP",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "dTjYtYABxlF1kxGwWGR1",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 10,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  // ];
  // const varPage3Data = [
  //   {
  //     id: "ojgOtoABxlF1kxGwhGQS",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 1,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  //   {
  //     id: "FzgRtoABxlF1kxGwl2WX",
  //     language: "JAVA",
  //     path: "https://github.com/ecsimsw/fast-crud/blob/develop/src/main/java/com/ecsimsw/fastcrud/TargetEntity.java",
  //     star: 1,
  //     className: "TargetEntity",
  //     codeLines:
  //       '    private final static String POSTFIX_REPOSITORY_BEAN_NAME = "Repository";\n\n    private final Class<?> type;\n    private final String rootPath;\n    private final String repositoryBeanName;\n\n    public TargetEntity(Object targetObj) {\n',
  //   },
  // ];
  const [totalCount, setTotalCount] = useState(0);

  const [classCount, setClassCount] = useState(0);
  const [wordCount, setWordCount] = useState(0);
  const [variableCount, setVariableCount] = useState(0);

  const handleInputChange = (e) => {
    setSearchInput(e.target.value);
  };

  const getTotalCount = async () => {
    const totalCountRes = await fetch(
      `http://www.ecsimsw.com:8080/code/count/${q}`
    ).then((totalCountRes) => totalCountRes.json());
    setTotalCount(totalCountRes);
  };

  const getData = async () => {
    const res = await fetch(url).then((res) => res.json());
    const classCountRes = await fetch(
      `http://www.ecsimsw.com:8080/code/count/class/${q}`
    ).then((classCountRes) => classCountRes.text());
    const variableCountRes = await fetch(
      `http://www.ecsimsw.com:8080/code/count/variable/${q}`
    ).then((variableCountRes) => variableCountRes.text());
    const wordCountRes = await fetch(
      `http://www.ecsimsw.com:8080/code/count/${q}`
    ).then((wordCountRes) => wordCountRes.text());
    console.log(res);
    console.log(classCountRes, variableCountRes, wordCountRes);
    setClassCount(classCountRes);
    setVariableCount(variableCountRes);
    setWordCount(wordCountRes);
    setData(res);
  };

  const changeUrl = (newUrl) => {
    setUrl(newUrl);
  };

  useEffect(() => {
    setUrl(`http://www.ecsimsw.com:8080/code/${q}`);
    console.log("first", url);
  }, []);

  useEffect(() => {
    getData();
    getTotalCount();
    console.log(q, url);
  }, [url]);

  return (
    <>
      <div className="search-header-layout">
        <SearchHeader
          searchInput={searchInput}
          handleInputChange={handleInputChange}
        />
      </div>
      <div className="search-body-layout">
        <div className="search-body">
          <SearchSideLayout
            classCount={classCount}
            variableCount={variableCount}
            wordCount={wordCount}
            searchWord={q}
            currentUrl={url}
            changeUrl={changeUrl}
          />
          <div className="search-main-layout">
            <div className="search-main-header">
              <div className="search-page-info">
                Showing <strong>1 - 10</strong> out of{" "}
                <strong>{wordCount}</strong> results
              </div>
            </div>
            <div className="search-main-body">
              <ul className="search-result-container">
                {data.map((it) => (
                  <SearchMainResult key={it.id} itemList={it} searchWord={q} />
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Search;
