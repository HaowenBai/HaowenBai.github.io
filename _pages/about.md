---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

<span class='anchor' id='about-me'></span>
My name is Haowen Bai (白浩闻). I am currently a Postdoctoral Research Fellow at Nanyang Technological University, Singapore, supervised by [Prof. Yap Kim Hui](https://dr.ntu.edu.sg/entities/person/Yap-Kim-Hui).

I received my Ph.D. degree in Statistics from School of Mathematics and Statistics, Xi’an Jiaotong University, supervised by [Prof. Jiangshe Zhang](https://gr.xjtu.edu.cn/en/web/jszhang) and worked closely with [Dr. Zixiang Zhao](https://zhaozixiang1228.github.io/) and [Prof. Shuang Xu](https://shuangxu96.github.io/).

My research focuses on low-level computer vision and multi-source information fusion, with a particular emphasis on multi-modal image fusion and restoration.

Email:  
haowen.bai (at) ntu.edu.sg   
haowen.bai (at) hotmail.com  
hwbaii (at) stu.xjtu.edu.cn (will expire)

<!-- Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. Suspendisse condimentum, libero vel tempus mattis, risus risus vulputate libero, elementum fermentum mi neque vel nisl. Maecenas facilisis maximus dignissim. Curabitur mattis vulputate dui, tincidunt varius libero luctus eu. Mauris mauris nulla, scelerisque eget massa id, tincidunt congue felis. Sed convallis tempor ipsum rhoncus viverra. Pellentesque nulla orci, accumsan volutpat fringilla vitae, maximus sit amet tortor. Aliquam ultricies odio ut volutpat scelerisque. Donec nisl nisl, porttitor vitae pharetra quis, fringilla sed mi. Fusce pretium dolor ut aliquam consequat. Cras volutpat, tellus accumsan mattis molestie, nisl lacus tempus massa, nec malesuada tortor leo vel quam. Aliquam vel ex consectetur, vehicula leo nec, efficitur eros. Donec convallis non urna quis feugiat.

My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2025.09*: One paper on video fusion is accepted by **NeurIPS 2025** <span style="color:red">(Spotlight)</span>.
- *2025.06*: Two papers are accepted by **ICCV 2025** (One on retinex-based image fusion and the other on hyper-spectral image restoration).
- *2025.02*: One paper on multi-modality image fusion is accepted by **CVPR 2025** <span style="color:red">(Highlight)</span>.

# 📖 Education and Experience
- *2025.12 - Present*, Research Fellow, School of Electrical Electronic Engineering, Nanyang Technological University.
- *2020.09 - 2025.09*, Ph.D. in Statistics, Xi'an Jiaotong University.
- *2016.09 - 2020.06*, B.S. in Information and Computing Science, Dalian University of Technology. 

# 📝 Publications 
## First-Author

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICCV 2025</div><img src='images_paper\Retinex-MEF.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Retinex-MEF: Retinex-based Glare Effects Aware Unsupervised Multi-Exposure Image Fusion**

IEEE/CVF International Conference on Computer Vision (**ICCV**), 2025. 

<span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Jiangshe Zhang\*, Zixiang Zhao\*, Lilun Deng, Yukun Cui, Shuang Xu

[**Paper**](https://openaccess.thecvf.com/content/ICCV2025/html/Bai_Retinex-MEF_Retinex-based_Glare_Effects_Aware_Unsupervised_Multi-Exposure_Image_Fusion_ICCV_2025_paper.html) \| 
[**ArXiv**](https://arxiv.org/abs/2503.07235) \| 
[**Code**](https://github.com/HaowenBai/Retinex-MEF)
- Retinex Theory–Based Adaptive Solution for Multi-Exposure Image Fusion, by modeling glare effects to adapt to overexposed conditions.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">CVPR 2025 Highlight</div><img src='images_paper\TDFusion.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Task-driven Image Fusion with Learnable Fusion Loss**

IEEE/CVF Conference on Computer Vision and Pattern Recognition (**CVPR**), 2025. <span style="color:red">(Highlight)</span>

<span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Jiangshe Zhang\*, Zixiang Zhao\*, Yichen Wu, Lilun Deng, Yukun Cui, Tao Feng, Shuang Xu

[**Paper**](https://openaccess.thecvf.com/content/CVPR2025/html/Bai_Task-driven_Image_Fusion_with_Learnable_Fusion_Loss_CVPR_2025_paper.html) \| 
[**ArXiv**](https://arxiv.org/abs/2412.03240) \| 
[**Code**](https://github.com/HaowenBai/TDFusion) \|
[**中文版**](../paper_cn/TDFusion_CN.pdf)
- A task-driven image fusion framework that employs a learnable fusion loss guided by downstream task objectives through meta-learning, enabling adaptive fusion optimization for improved performance in downstream tasks.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TCSVT 2025</div><img src='images_paper\UAAFusion.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Deep Unfolding Multi-modal Image Fusion Network via Attribution Analysis**

IEEE Transactions on Circuits and Systems for Video Technology (**TCSVT**), 35(4), pp. 3498-3511, 2025.

<span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Zixiang Zhao, Jiangshe Zhang\*, Baisong Jiang, Lilun Deng, Yukun Cui, Shuang Xu, Chunxia Zhang

[**Paper**](https://ieeexplore.ieee.org/abstract/document/10769519) \| 
[**ArXiv**](https://arxiv.org/abs/2502.01467) \| 
[**Code**](https://github.com/HaowenBai/UAAFusion) 
- An attribution-guided fusion framework that optimizes multi-modal image synthesis for semantic segmentation via unfolding networks and adaptive loss design, prioritizing task-critical features through attribution maps.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCV 2024</div><img src='images_paper\ReFusion.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**ReFusion: Learning Image Fusion from Reconstruction with Learnable Loss Via Meta-Learning**

International Journal of Computer Vision (**IJCV**), pp.1-23, 2024.

<span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Zixiang Zhao\*, Jiangshe Zhang\*, Yichen Wu, Lilun Deng, Yukun Cui, Baisong Jiang, Shuang Xu

[**Paper**](https://link.springer.com/article/10.1007/s11263-024-02256-8) \| 
[**ArXiv**](https://arxiv.org/abs/2312.07943) \| 
[**Code**](https://github.com/HaowenBai/ReFusion) 
- Propose a meta-learning-based image fusion framework that dynamically optimizes task-specific loss functions through source image reconstruction to preserve optimal source information.
</div>
</div>



<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IEEE TGRS 2024</div><img src='images_paper\SPR.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

**Simultaneous Automatic Picking and Manual Picking Refinement for First-Break**

IEEE Transactions on Geoscience and Remote Sensing (**TGRS**), 62, pp. 1-12, 2024.

<span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Zixiang Zhao, Jiangshe Zhang\*, Yukun Cui, Chunxia Zhang\*, Zhenbo Guo, Yongjun Wang

[**Paper**](https://ieeexplore.ieee.org/abstract/document/10530364) \| 
[**ArXiv**](https://arxiv.org/abs/2502.01474)
- Propose a novel approach that jointly optimizes label refinement and first-break picking performance in microseismic data by integrating a latent variable representation of true first-break times into a probabilistic model.
</div>
</div>


## Collaborative Works

- ``NeurIPS 2025``<span style="color:red"> (Spotlight)</span> **A Unified Solution to Video Fusion: From Multi-Frame Learning to Benchmarking.**   
Neural Information Processing Systems (**NeurIPS**), 2025.  
Zixiang Zhao, <span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Bingxin Ke, Yukun Cui, Lilun Deng, Yulun Zhang, Kai Zhang, Konrad Schindler  
[**Project Page**](https://vfbench.github.io) \|
**Paper** \| 
[**ArXiv**](https://arxiv.org/abs/2505.19858) \| 
[**Code**](https://github.com/Zhaozixiang1228/VF-Bench) 


- ``ICCV 2025`` **Hipandas: Hyperspectral Image Joint Denoising and Super-Resolution by Image Fusion with the Panchromatic Image**   
IEEE/CVF International Conference on Computer Vision (**ICCV**), 2025.  
Shuang Xu, Zixiang Zhao, <span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Chang Yu, Jiangjun Peng, Xiangyong Cao, Deyu Meng  
**Paper** \| 
**ArXiv** \| 
**Code** 

- ``ICML 2024`` **Image fusion via vision-language model**   
Forty-first International Conference on Machine Learning (**ICML**), 2024.  
Zixiang Zhao, Lilun Deng, <span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Yukun Cui, Zhipeng Zhang, Yulun Zhang, Haotong Qin, Dongdong Chen, Jiangshe Zhang, Peng Wang, Luc Van Gool  
[**Project Page**](https://zhaozixiang1228.github.io/Project/IF-FILM/) \| 
[**Paper**](https://openreview.net/pdf?id=eqY64Z1rsT) \| 
[**ArXiv**](https://arxiv.org/abs/2402.02235) \| 
[**Code**](https://github.com/Zhaozixiang1228/IF-FILM) 

<!-- - Introduce a novel fusion paradigm, for the first time, utilizing explicit textual information to guide image fusion. -->



- ``CVPR 2024`` **Equivariant multi-modality image fusion**  
IEEE/CVF Conference on Computer Vision and Pattern Recognition (**CVPR**), 2024.  
Zixiang Zhao, <span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Jiangshe Zhang, Yulun Zhang, Kai Zhang, Shuang Xu, Dongdong Chen, Radu Timofte, Luc Van Gool  
[**Paper**](https://openaccess.thecvf.com/content/CVPR2024/html/Zhao_Equivariant_Multi-Modality_Image_Fusion_CVPR_2024_paper.html) \| 
[**ArXiv**](https://arxiv.org/abs/2305.11443) \| 
[**Code**](https://github.com/Zhaozixiang1228/MMIF-EMMA) 


<!-- - Propose a novel end-to-end self-supervised fusion algorithm based on the equivariant sensing and imaging prior. -->



- ``ICCV 2023``<span style="color:red"> (Oral)</span> **DDFM: denoising diffusion model for multi-modality image fusion**  
IEEE/CVF International Conference on Computer Vision (**ICCV**), 2023.  
Zixiang Zhao, <span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Yuanzhi Zhu, Jiangshe Zhang, Shuang Xu, Yulun Zhang, Kai Zhang, Deyu Meng, Radu Timofte, Luc Van Gool  
[**Paper**](https://openaccess.thecvf.com/content/ICCV2023/html/Zhao_DDFM_Denoising_Diffusion_Model_for_Multi-Modality_Image_Fusion_ICCV_2023_paper.html) \| 
[**ArXiv**](https://arxiv.org/abs/2303.06840) \| 
[**Code**](https://github.com/Zhaozixiang1228/MMIF-DDFM) 

<!-- - Propose a novel fusion algorithm based on the denoising diffusion sampling model. -->


- ``CVPR 2023`` **CDDfuse: Correlation-Driven Dual-branch feature decomposition for multi-modality image fusion**  
IEEE/CVF Conference on Computer Vision and Pattern Recognition (**CVPR**), 2023.  
Zixiang Zhao, <span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Jiangshe Zhang, Yulun Zhang, Shuang Xu, Zudi Lin, Radu Timofte, Luc Van Gool  
[**Paper**](https://openaccess.thecvf.com/content/CVPR2023/html/Zhao_CDDFuse_Correlation-Driven_Dual-Branch_Feature_Decomposition_for_Multi-Modality_Image_Fusion_CVPR_2023_paper.html) \| 
[**ArXiv**](https://arxiv.org/abs/2211.14461) \| 
[**Code**](https://github.com/Zhaozixiang1228/MMIF-CDDFuse) 
<!-- - Propose a Correlation-Driven feature Decomposition Fusion (CDDFuse) network for multi-modality image fusion. -->

- ``CVPRW 2023`` **Deep convolutional sparse coding networks for interpretable image fusion**  
IEEE/CVF Conference on Computer Vision and Pattern Recognition Workshops (**CVPRW**), 2023.  
Zixiang Zhao, Jiangshe Zhang, <span style="color:rgb(34,75,141)">**Haowen Bai**</span>, Yicheng Wang, Yukun Cui, Lilun Deng, Kai Sun, Chunxia Zhang, Junmin Liu, Shuang Xu  
[**Paper**](https://openaccess.thecvf.com/content/CVPR2023W/AML/html/Zhao_Deep_Convolutional_Sparse_Coding_Networks_for_Interpretable_Image_Fusion_CVPRW_2023_paper.html) \| 
[**Code**](https://github.com/Zhaozixiang1228/IF-CSCFuse) 
<!-- - Gave three deep convolutional sparse coding networks for interpretable image fusion via unfolding the iterative shrinkage and thresholding algorithm. -->


# 🌐 Services

Conference Reviewer:

- CVPR, ICCV, AAAI, NeurIPS, WACV, ...

Journal Reviewer:
- International Journal of Computer Vision (IJCV)
- IEEE Transactions on Image Processing (TIP)
- IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)  
- Information Fusion
- ISPRS Journal of Photogrammetry and Remote Sensing
- Knowledge-Based Systems  
- Neurocomputing  
- Computer Methods and Programs in Biomedicine
- ...

<!-- # 💬 Invited Talks
- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/)

# 💻 Internships
- *2019.05 - 2020.02*, [Lorem](https://github.com/), China. -->